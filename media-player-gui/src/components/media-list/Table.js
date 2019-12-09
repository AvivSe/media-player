import React, {useEffect, useState} from "react"
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../../scss/ag-grid.scss'
import DatasourceAgGridAdapter from '../../backend-bridge/datasource.ag-grid.adapter'
import mediaSearchService from "../../backend-bridge/media-search.service";
import ResultsTable from "./ResultsTable";
import Options, {GRID_MODE_OPT, SEARCH_AS_YOU_TYPE_OPT} from "./Options";
import Media from "./Media";
import SearchBox from "./SearchBox";
import Dialog from "../Dialog";

const Wrapper = styled.div`
  min-width: 1200px;
  .ag-cell-focus {
     border: none !important;
  }
`;

const Header = styled.div`
  background-color: ${(({theme}) => theme.palette.primary.main)};
`;

export default () => {
  const [keywords, setKeyword] = useState('');
  const [gridApi, setGridApi] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [options, setOptions] = useState({
    [SEARCH_AS_YOU_TYPE_OPT]: true,
    [GRID_MODE_OPT]: false,
  });

  useEffect(() => {
    if (!!modalContent) {
      setOpen(true)
    }
  }, [modalContent]);

  useEffect(() => {
    if (!!gridApi && !!keywords) {
      gridApi.setServerSideDatasource(new DatasourceAgGridAdapter(mediaSearchService, keywords));
      gridApi.sizeColumnsToFit();
    }
  }, [keywords, gridApi]);

  useEffect(() => {
    if(!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi]);
  const handleOpen = media => {
    setModalContent(<Media media={media}/>);
  };

  const onGridReady = ({api}) => {
    setGridApi(api);
    api.handleMoreDetailsClicked = handleOpen;
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
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
      <Header>
        <SearchBox handleSubmit={handleSubmit} handleChange={handleChange}
                   searchAsYouType={options[SEARCH_AS_YOU_TYPE_OPT]}/>
        <Options useOptions={() => [options, setOptions]}/>
        <ResultsTable onGridReady={onGridReady} setModalOpen={handleOpen}/>
      </Header>
      <Dialog open={open} handleClose={handleClose}>
        {modalContent}
      </Dialog>
    </Wrapper>
  )
}
