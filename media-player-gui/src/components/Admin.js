import React, { useCallback, useEffect, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import styled from "styled-components";
import UserDatasourceAgGridAdapter from "../services/ag-grid-adapters/user.ag-grid-adapter";
import userService from "../services/user.service";
import Fab from "@material-ui/core/Fab";
import { CloseOutlined } from "@material-ui/icons";
import LinkFab from "../LinkFab";
import { useWidth } from "../hooks/useWidth";
import DeleteCellRenderer from "./cell-renderers/DeleteCellRenderer";
import { connect } from "react-redux";
import { openSnackbar } from "../actions/ui.actions";
import PasswordCellFormatter from "./cell-renderers/PasswordCellForamtter";

const Wrapper = styled.div``;

const AgGridWrapper = styled.div`
  width: 100%;
  height: 75vh;
  .ag-cell-focus {
    border: none !important;
  }
  // .ag-root-wrapper, .ag-header, .ag-header-row {
  //     color: ${({ theme }) => theme.palette.primary.text};
  //     background-color: ${({ theme }) => theme.palette.primary.contrastText};
  // }
`;

const Admin = ({ openSnackbar }) => {
  const [rowData, setRowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const width = useWidth();

  useEffect(() => {
    userService
      .find()
      .then(({ data }) => {
        setRowData(data.rows);
      })
      .catch(error => {
        openSnackbar(error);
      });
  }, []);

  useEffect(() => {
    if (!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi, rowData]);

  const handleClickDeleteOne = ({ username, api }) => {
    userService
      .deleteOne(username)
      .then(({ data }) => {
        openSnackbar({ message: `${username} has been deleted` });
      })
      .catch(openSnackbar);
  };

  const defaultColumnDefs = [
    { headerName: "#", width: 45, checkboxSelection: true, sortable: false, filter: false, pinned: true },
    { headerName: "Id", field: "_id", hide: true, sortable: false, editable: false },
    { headerName: "Username", field: "username", editable: false },
    { headerName: "First Name", field: "firstName" },
    { headerName: "Last Name", field: "lastName" },
    { headerName: "Password", field: "password", cellRenderer: "PasswordCellFormatter"},
    { headerName: "Top Searches", field: "topSearches" }, // todo: cell renderer
    {
      headerName: "",
      cellRenderer: "DeleteCellRenderer",
      cellRendererParams: { onClick: handleClickDeleteOne },
      width: 80
    }
  ];

  const onGridReady = ({ api }) => {
    //api.setServerSideDatasource(new UserDatasourceAgGridAdapter(userService));
    api.sizeColumnsToFit();
    setGridApi(api);
  };

  const handleEditingStop = ({ column, data }) => {
    userService
      .put(data.username, { [column.colId]: data[column.colId] })
      .then(res => {
        openSnackbar({ message: `${data.username} updated successfully` });
      })
      .catch(error => {
        openSnackbar(error);
      });
  };

  useEffect(() => {
    if (!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [width, gridApi]);

  return (
    <Wrapper>
      <LinkFab to={"/listing"} icon={CloseOutlined} />
      <AgGridWrapper className={"ag-theme-material"}>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          //suppressRowClickSelection={true}
          columnDefs={defaultColumnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
            filter: true,
            editable: true
          }}
          frameworkComponents={{ DeleteCellRenderer, PasswordCellFormatter }}
          // gridOptions={{ rowModelType: "serverSide" }}
          // cacheBlockSize={200}
          // cacheOverflowSize={2}
          // maxConcurrentDatasourceRequests={1}
          // maxBlocksInCache={10}
          modules={AllModules}
          onCellEditingStopped={handleEditingStop}
        />
      </AgGridWrapper>
    </Wrapper>
  );
};

export default connect(null, {
  openSnackbar
})(Admin);
