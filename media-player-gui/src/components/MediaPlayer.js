import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Listing from "./Listing";
import OptionsSpeedDial, { SEARCH_AS_YOU_TYPE_OPT } from "./OptionsSpeedDial";
import SearchBox from "./SearchBox";
import Dialog from "./Dialog";
import MediaSearchAgGridAdapter from "../services/ag-grid-adapters/media-search.ag-grid.adapter";
import mediaSearchService from "../services/media-search.service";
import HTML5Player from "./HTML5Player";
import { ExitToAppOutlined, PeopleOutline, VolumeOffOutlined, VolumeUpOutlined } from "@material-ui/icons";
import Draggable from "react-draggable";
import LinkFab from "../LinkFab";
import { useWindowSize } from "../hooks/useWindowSize";
import TopSearches from "./TopSearches";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/auth.actions";
import { getSelectedMedia } from "../redux/player/player.selectors";
import { openSnackbar } from "../redux/ui/ui.actions";

const Row = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Controls = styled.div`
  button {
    margin-top: -5rem;
    margin-right: 0.5rem;
  }
`;

const DraggableHelper = styled.div`
  position: fixed;
  z-index: 100;
`;

const MediaPlayer = () => {
  const selectedMedia = useSelector(getSelectedMedia);
  const [isMute, setIsMute] = useState(false);
  const [keywords, setKeywords] = useState("Metallica");
  const [gridApi, setGridApi] = useState(null);
  const [dialog, setDialog] = useState(null);
  const [options, setOptions] = useState({ [SEARCH_AS_YOU_TYPE_OPT]: true });
  const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];
  const dispatch = useDispatch();
  const { width } = useWindowSize();

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
  }, [gridApi, selectedMedia, width]);

  const handleCloseDialog = () => setDialog(null);

  const handleOpenDialog = content => setDialog({ open: true, content: <HTML5Player media={content} /> });

  const handleOptionsChange = options => setOptions(prevOptions => ({ ...prevOptions, ...options }));

  const handleKeywordsChange = keywords => setKeywords(keywords);

  const handleGridReady = ({ api }) => setGridApi(api);

  const handleMuteButtonClick = () => {
    setIsMute(!isMute);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    dispatch(openSnackbar({ message: "Don't forget to logout" }))
  };

  return (
    <div>
      <Controls>
        <LinkFab to={"/users"} icon={<PeopleOutline />} />
        <LinkFab icon={<ExitToAppOutlined />} onClick={handleLogoutClick} />
        <LinkFab icon={isMute ? <VolumeOffOutlined /> : <VolumeUpOutlined />} onClick={handleMuteButtonClick} />
        <TopSearches onKeywordsChange={handleKeywordsChange} />
      </Controls>
      <DraggableHelper>
        <Draggable handle=".handle" defaultPosition={{ x: width - 1400, y: -40 }}>
          <div className={"handle"}>
            <HTML5Player isMute={isMute}/>
          </div>
        </Draggable>
      </DraggableHelper>
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
    </div>
  );
};

export default MediaPlayer;
