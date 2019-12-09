import React, {useEffect, useState} from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from '@ag-grid-enterprise/all-modules';
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../scss/ag-grid.scss'
import DatasourceAdapter from '../backend-bridge/datasource'
import mediaSearchService from "../backend-bridge/media-search.service";
import {FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";
import Button from "./Button";

const AgGridWrapper = styled.div`
  width: 80vw;
  height: 75vh;
`;

const Wrapper = styled.div`

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
  const [keywords, setKeyword] = useState('');
  const [gridApi, setGridApi] = useState(null);

  const onGridReady = ({columnApi, api}) => {
    setGridApi(api);
  };

  const handleSubmit = () => {
    if(!!gridApi) {
      gridApi.setServerSideDatasource(new DatasourceAdapter(mediaSearchService, keywords));
      gridApi.sizeColumnsToFit();
    }
  };

  return (
    <Wrapper>
      <div>
        <FormControl>
          <InputLabel htmlFor="search-input">Search</InputLabel>
          <Input id="search-input" aria-describedby="search-input-helper-text" value={keywords} onChange={e=>setKeyword(e.target.value)}/>
          <FormHelperText id="search-input-helper-text"><span style={{color:'red'}}>todo: Search as you type</span></FormHelperText>
        </FormControl>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
      <AgGridWrapper className="ag-theme-material">
        <AgGridReact
          onGridReady={onGridReady}
          pagination={true}
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
      </AgGridWrapper>
    </Wrapper>
  )
}
