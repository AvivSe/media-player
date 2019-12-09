import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from '@ag-grid-enterprise/all-modules';
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../scss/ag-grid.scss'
import DatasourceAdapter from '../backend-bridge/datasource'
import mediaSearchService from "../backend-bridge/media-search.service";

const Wrapper = styled.div`
  width: 80vw;
  height: 75vh;
`;



const defaultColumnDefs = [
  {headerName: "Id", field: "_id", hide: true, sortable: false, editable: false},
  {headerName: "Artist", field: "artistName", width: 140},
  {headerName: "Collection", field: "collectionName", width: 140},
  {headerName: "Track", field: "trackName", width: 140},
  {headerName: "Price", field: "trackPrice", width: 75},
  {headerName: "Genre", field: "primaryGenreName", width: 120,},
  {headerName: "Image", field: "artworkUrl100"},
  {headerName: "Duration", field: "trackTimeMillis", width: 100}
];

export default () => {

  const onGridReady = ({columnApi, api}) => {
    console.log(api);
    api.setServerSideDatasource(new DatasourceAdapter(mediaSearchService));
    api.sizeColumnsToFit();
  };

  return (
    <Wrapper className="ag-theme-material">
        <AgGridReact
          onGridReady={onGridReady}
          paginationAutoPageSize={true}
          cacheBlockSize={6}
          suppressRowClickSelection={true}
          gridOptions={{rowModelType: 'serverSide'}}
          columnDefs={defaultColumnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
            editable: true,
            filter: true,
          }}
          modules={AllModules}/>
    </Wrapper>
  )
}
