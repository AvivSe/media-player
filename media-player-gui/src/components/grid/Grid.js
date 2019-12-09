import React, {useState} from "react"
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../../scss/ag-grid.scss'
import DatasourceAgGridAdapter from '../../backend-bridge/datasource.ag-grid.adapter'
import mediaSearchService from "../../backend-bridge/media-search.service";
import SearchBox from "./SearchBox";
import ResultsTable from "./ResultsTable";

const Wrapper = styled.div`
  width: 70vw;
`;

export default () => {
  const [keywords, setKeyword] = useState('');
  const [gridApi, setGridApi] = useState(null);

  const onGridReady = ({api}) => {
    setGridApi(api);
  };

  const handleSubmit = e => {
    if (!!gridApi && !!keywords) {
      gridApi.setServerSideDatasource(new DatasourceAgGridAdapter(mediaSearchService, keywords));
      gridApi.sizeColumnsToFit();
    }
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <Wrapper>
      <SearchBox handleSubmit={handleSubmit} handleChange={handleChange}/>
      {!!keywords && <ResultsTable onGridReady={onGridReady} />}
    </Wrapper>
  )
}
