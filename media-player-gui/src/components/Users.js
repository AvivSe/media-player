import React, { useEffect, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import styled from "styled-components";
import { CloseOutlined } from "@material-ui/icons";
import LinkFab from "../LinkFab";
import { useWindowSize } from "../hooks/useWindowSize";
import DeleteCellRenderer from "./cell-renderers/DeleteCellRenderer";
import { useDispatch, useSelector } from "react-redux";
import PasswordCellFormatter from "./cell-renderers/PasswordCellForamtter";
import { DateCellFormatter } from "./cell-renderers/DateCellFormatter";
import { deleteOneUser, deleteUsers, fetchUsers, updateUser } from "../redux/user/user.actions";
import { getIsEmptyUserList, getUserList } from "../redux/user/user.selectors";
import { openSnackbar } from "../redux/ui/ui.actions";
import Fab from "@material-ui/core/Fab";

const Wrapper = styled.div``;

const AgGridWrapper = styled.div`
  width: 100%;
  height: 75vh;
  margin-top: 1rem;
  .ag-cell-focus {
    border: none !important;
  }
  .ag-icon {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const Users = () => {
  const [gridApi, setGridApi] = useState(null);
  const dispatch = useDispatch();
  const { width } = useWindowSize();
  const isEmptyUserList = useSelector(getIsEmptyUserList);
  const rowData = useSelector(getUserList);

  useEffect(() => {
    if (isEmptyUserList) {
      dispatch(fetchUsers());
    }
  }, [isEmptyUserList, dispatch]);

  useEffect(() => {
    const keyDownEventHandler = ({key}) => {
      console.log(key);
      if(!!gridApi && key === "Delete") {
        const selectedRows = gridApi.getSelectedRows();
        if(selectedRows.length === 0) {
          dispatch(openSnackbar({ message: "Pressing delete will affect selected rows"}))
        } else {
          dispatch(deleteUsers(selectedRows.map(user => user.username)))
        }
      }
    };
      document.addEventListener('keydown', keyDownEventHandler);
    return () => document.removeEventListener('keydown', keyDownEventHandler);
  }, [gridApi, dispatch]);

  useEffect(() => {
    if (!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi, rowData]);

  const handleClickDeleteOne = ({ username }) => {
    dispatch(
      openSnackbar({
        message: (
          <div>
            {`Delete ${username}? `}
            <Fab
              color={"secondary"}
              onClick={() => {
                dispatch(deleteOneUser(username));
              }}
            >
              yes
            </Fab>
          </div>
        )
      })
    );
  };

  const defaultColumnDefs = [
    { headerName: "#", width: 45, checkboxSelection: true, editable: false, sortable: false, filter: false, pinned: true },
    { headerName: "Id", field: "_id", hide: true, sortable: false, editable: false },
    { headerName: "Username", field: "username", editable: false },
    { headerName: "First Name", field: "firstName" },
    { headerName: "Last Name", field: "lastName" },
    { headerName: "Password", field: "password", cellRenderer: "PasswordCellFormatter" },
    { headerName: "Last Login", field: "lastLogin", editable: false, cellRenderer: "DateCellFormatter" },
    {
      headerName: "",
      cellRenderer: "DeleteCellRenderer",
      cellRendererParams: { onClick: handleClickDeleteOne },
      width: 80
    }
  ];

  const onGridReady = ({ api }) => {
    api.sizeColumnsToFit();
    setGridApi(api);
  };

  const handleEditingStop = ({ column, data }) => {
    dispatch(updateUser(data.username, data[column.colId]));
  };

  useEffect(() => {
    if (!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [width, gridApi]);

  return (
    <Wrapper>
      <LinkFab to={"/listing"} icon={<CloseOutlined />} />
      <AgGridWrapper className={"ag-theme-material"}>
        <AgGridReact
          onGridReady={onGridReady}
          suppressRowClickSelection={true}
          animateRows={true}
          rowData={rowData}
          rowSelection="multiple"
          columnDefs={defaultColumnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
            filter: true,
            editable: true
          }}
          frameworkComponents={{ DeleteCellRenderer, PasswordCellFormatter, DateCellFormatter }}
          modules={AllModules}
          onCellEditingStopped={handleEditingStop}
        />
      </AgGridWrapper>
    </Wrapper>
  );
};

export default Users;
