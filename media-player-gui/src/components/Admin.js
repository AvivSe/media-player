import React from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import styled from "styled-components";
import UserDatasourceAgGridAdapter from "../services/user.ag-grid-adapter";
import userService from "../services/user.service";

const defaultColumnDefs = [
  { headerName: "#", width: 45, checkboxSelection: true, sortable: false, filter: false, pinned: true },
  { headerName: "Id", field: "_id", hide: true, sortable: false, editable: false },
  { headerName: "Username", field: "username" },
  { headerName: "First Name", field: "firstName" },
  { headerName: "Last Name", field: "lastName" },
  { headerName: "Top Searches", field: "topSearches", width: 80 } // todo: cell renderer
];

const Wrapper = styled.div`
  width: 75vw;
`;

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

const Admin = () => {
  const onGridReady = ({ api }) => {
    api.setServerSideDatasource(new UserDatasourceAgGridAdapter(userService));
    api.sizeColumnsToFit();
  };

  return (
    <Wrapper>
      <AgGridWrapper className={"ag-theme-material"}>
        <AgGridReact
          onGridReady={onGridReady}
          //suppressRowClickSelection={true}
          columnDefs={defaultColumnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
            filter: true,
            editable: true
          }}
          frameworkComponents={{}}
          gridOptions={{ rowModelType: "serverSide" }}
          cacheBlockSize={200}
          cacheOverflowSize={2}
          maxConcurrentDatasourceRequests={1}
          maxBlocksInCache={10}
          modules={AllModules}
        />
      </AgGridWrapper>
    </Wrapper>
  );
};

export default Admin;
