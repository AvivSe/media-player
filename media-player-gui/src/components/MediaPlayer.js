import React, { createContext, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Listing from "./Listing";
import OptionsSpeedDial, { GRID_MODE_OPT, SEARCH_AS_YOU_TYPE_OPT } from "./OptionsSpeedDial";
import SearchBox from "./SearchBox";
import Dialog from "./Dialog";
import MediaSearchAgGridAdapter from "../services/ag-grid-adapters/media-search.ag-grid.adapter";
import mediaSearchService from "../services/media-search.service";
import HTML5Player from "./HTML5Player";
import { useMediaPlayer } from "../hooks/useMediaPlayer";
import { MediaPlayerContextProvider } from "../contexts";
import { PeopleOutline } from "@material-ui/icons";

import LinkFab from "../LinkFab";
import { useWidth } from "../hooks/useWidth";

const Row = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const MediaPlayer = () => {
  const _useMediaPlayer = useMediaPlayer();
  const [keywords, setKeywords] = useState("Metallica");
  const [gridApi, setGridApi] = useState(null);
  const [dialog, setDialog] = useState(null);
  const [options, setOptions] = useState({ [SEARCH_AS_YOU_TYPE_OPT]: true });
  const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];
  const width = useWidth();

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
      // TODO The timeout is only for fix the first time loading table margin bottom issue, have to handle without timeout
      setTimeout(() => gridApi.sizeColumnsToFit(), 500);
    }
  }, [gridApi, _useMediaPlayer.selected, width]);

  const handleCloseDialog = () => setDialog(null);

  const handleOpenDialog = content => setDialog({ open: true, content: <HTML5Player media={content} /> });

  const handleOptionsChange = options => setOptions(prevOptions => ({ ...prevOptions, ...options }));

  const handleKeywordsChange = keywords => setKeywords(keywords);

  const handleGridReady = ({ api }) => setGridApi(api);

  return (
    <div>
      <MediaPlayerContextProvider value={_useMediaPlayer}>
        <LinkFab to={"/admin"} icon={PeopleOutline} />
        <HTML5Player />
        <Row>
          <SearchBox
            onKeywordsChange={handleKeywordsChange}
            keywords={keywords}
            onSubmit={fetchSearchResults}
            options={options}
          />
          <OptionsSpeedDial options={options} onOptionsChange={handleOptionsChange} />
        </Row>
        <Listing onGridReady={handleGridReady} onDialogOpen={handleOpenDialog} />
        <Dialog dialog={dialog} onDialogClose={handleCloseDialog}>
          {dialog && dialog.content}
        </Dialog>
      </MediaPlayerContextProvider>
    </div>
  );
};

export default MediaPlayer;
