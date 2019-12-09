import React from 'react';
import {AgGridReact} from '@ag-grid-community/react';
import {AllModules} from '@ag-grid-enterprise/all-modules';
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../../scss/ag-grid.scss'
import MoreDetailsCellRenderer from './MoreDetailsCellRenderer';

const AgGridWrapper = styled.div`
  width: 100%;
  height: 75vh;
  .ag-body-horizontal-scroll {
    display: none;
  }
`;

const defaultColumnDefs = [
  {headerName: 'Artist', field: 'artistName', width: 140},
  {headerName: 'Collection', field: 'collectionName', width: 140},
  {headerName: 'Track', field: 'trackName', width: 140},
  {headerName: 'Price', field: 'trackPrice', width: 75},
  {headerName: 'Genre', field: 'primaryGenreName', width: 120,},
  {headerName: 'Image', field: 'artworkUrl100'},
  {headerName: 'Duration', field: 'trackTimeMillis', width: 100},
  {headerName: 'Details', field: 'trackId', cellRenderer: 'MoreDetailsCellRenderer', width: 100,},
];

export default ({onGridReady}) => {

  return <AgGridWrapper className='ag-theme-material'>
    <AgGridReact
      onGridReady={onGridReady}
      cacheBlockSize={200}
      //suppressRowClickSelection={true}
      gridOptions={{rowModelType: 'serverSide'}}
      columnDefs={defaultColumnDefs}
      defaultColDef={{
        resizable: true,
        sortable: true,
        filter: true,
      }}
      frameworkComponents={{
        'MoreDetailsCellRenderer':MoreDetailsCellRenderer
      }}
      cacheOverflowSize={2}
      maxConcurrentDatasourceRequests={1}
      maxBlocksInCache={10}
      modules={AllModules}/>
  </AgGridWrapper>
}
