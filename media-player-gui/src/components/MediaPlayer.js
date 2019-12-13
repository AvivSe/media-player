import React, { createContext, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Listing from "./Listing";
import Options, { GRID_MODE_OPT, SEARCH_AS_YOU_TYPE_OPT } from "./Options";
import SearchBox from "./SearchBox";
import Dialog from "./Dialog";
import MediaSearchAgGridAdapter from "../services/media-search.ag-grid.adapter";
import mediaSearchService from "../services/media-search.service";
import HTML5Player from "./HTML5Player";
import { useMediaPlayer } from "../hooks/useMediaPlayer";
import { MediaPlayerContextProvider } from "../contexts";

const Wrapper = styled.div`
  min-width: 1200px;

`;

const MediaPlayer = () => {
  const _useMediaPlayer = useMediaPlayer();
  const [keywords, setKeywords] = useState("Metallica");
  const [gridApi, setGridApi] = useState(null);
  const [dialog, setDialog] = useState(null);
  const [options, setOptions] = useState({ [SEARCH_AS_YOU_TYPE_OPT]: true });
  const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];

  const fetchSearchResults = useCallback(() => {
    !!gridApi &&
      !!keywords &&
      gridApi.setServerSideDatasource(new MediaSearchAgGridAdapter(mediaSearchService, keywords));
  }, [keywords, gridApi]);

  useEffect(() => {
    if (searchAsYouType) {
      fetchSearchResults();
    }
  }, [fetchSearchResults, searchAsYouType]);

  useEffect(() => {
    if (!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi, _useMediaPlayer.selected]);

  const handleCloseDialog = () => setDialog(null);

  const handleOpenDialog = content => setDialog({ open: true, content: <HTML5Player media={content} /> });

  const handleOptionsChange = options => setOptions(prevOptions => ({ ...prevOptions, ...options }));

  const handleKeywordsChange = keywords => setKeywords(keywords);

  const handleGridReady = ({ api }) => setGridApi(api);

  return (
    <Wrapper>
      <MediaPlayerContextProvider value={_useMediaPlayer}>
        <HTML5Player/>
        <SearchBox
          onKeywordsChange={handleKeywordsChange}
          keywords={keywords}
          onSubmit={fetchSearchResults}
          options={options}
        />
        <Options options={options} onOptionsChange={handleOptionsChange} />
        <Listing onGridReady={handleGridReady} onDialogOpen={handleOpenDialog} />
        <Dialog dialog={dialog} onDialogClose={handleCloseDialog}>
          {dialog && dialog.content}
        </Dialog>
      </MediaPlayerContextProvider>
    </Wrapper>
  );
};

export default MediaPlayer;
