import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "../../scss/ag-grid.scss";
import Listing from "./Listing";
import Options, { GRID_MODE_OPT, SEARCH_AS_YOU_TYPE_OPT } from "./Options";
import SearchBox from "./SearchBox";
import Dialog from "../Dialog";
import DatasourceAgGridAdapter from "../../backend-bridge/datasource.ag-grid.adapter";
import mediaSearchService from "../../backend-bridge/media-search.service";
import Media from "./Media";

const Wrapper = styled.div`
  min-width: 1200px;
  .ag-cell-focus {
    border: none !important;
  }
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const Table = () => {
  const [keywords, setKeywords] = useState("Metallica");
  const [gridApi, setGridApi] = useState(null);
  const [dialog, setDialog] = useState(null);
  const [options, setOptions] = useState({ [SEARCH_AS_YOU_TYPE_OPT]: true, [GRID_MODE_OPT]: false });
  const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];

  const fetchSearchResults = useCallback(
    () =>{ !!gridApi && !!keywords && gridApi.setServerSideDatasource(new DatasourceAgGridAdapter(mediaSearchService, keywords))},
    [keywords, gridApi]
  );

  useEffect(() => {
    if (searchAsYouType) {
      fetchSearchResults();
    }
  }, [fetchSearchResults, searchAsYouType]);

  useEffect(() => {
    if (!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi]);

  const handleCloseDialog = () => setDialog(null);

  const handleOpenDialog = content => setDialog({ open: true, content: <Media media={content} /> });

  const handleOptionsChange = options => setOptions(prevOptions => ({ ...prevOptions, ...options }));

  const handleKeywordsChange = keywords => setKeywords(keywords);

  const handleGridReady = ({api}) => setGridApi(api);

  return (
    <Wrapper>
      <Header>
        <SearchBox onKeywordsChange={handleKeywordsChange} keywords={keywords} onSubmit={fetchSearchResults} options={options} />
        <Options options={options} onOptionsChange={handleOptionsChange} />
        <Listing onGridReady={handleGridReady} onDialogOpen={handleOpenDialog} />
      </Header>
      <Dialog dialog={dialog} handleCloseDialog={handleCloseDialog}>
        {dialog && dialog.content}
      </Dialog>
    </Wrapper>
  );
};

export default Table;
