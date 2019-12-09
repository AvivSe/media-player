import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from '@ag-grid-enterprise/all-modules';
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../../scss/ag-grid.scss'

const AgGridWrapper = styled.div`
  width: 100%;
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

export default ({ onGridReady }) => {

  return <AgGridWrapper className="ag-theme-material">
        <AgGridReact
          onGridReady={onGridReady}
          cacheBlockSize={200}
          //suppressRowClickSelection={true}
          gridOptions={{rowModelType: 'serverSide'}}
          columnDefs={defaultColumnDefs}
          defaultColDef={{
            resizable: true,
            sortable: true,
            editable: true,
            filter: true,
          }}
          cacheOverflowSize={2}
          maxConcurrentDatasourceRequests={1}
          maxBlocksInCache={10}
          modules={AllModules}/>
      </AgGridWrapper>
}
