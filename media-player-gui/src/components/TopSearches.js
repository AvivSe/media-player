import Fab from "@material-ui/core/Fab";
import { HistoryOutlined } from "@material-ui/icons";
import Popper from "@material-ui/core/Popper";
import Chip from "@material-ui/core/Chip";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { getProfile } from "../redux/auth/auth.selectors";
import Draggable from "react-draggable";
import searchService from "../services/media-search.service";
import { useDispatch } from "react-redux/src";
import { openSnackbar } from "../redux/ui/ui.actions";
const StyledPopperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
`;
const TopSearches = ({ onKeywordsChange }) => {
  // const topSearchButtonRef = useRef();
  // const [isTopSearchesOpen, setTopSearchesOpen] = React.useState(false);
  // const [topSearches, setTopSearches] = useState(null);
  // const dispatch = useDispatch();
  // const handleTopSearchesClick = () => {
  //   setTopSearchesOpen(!isTopSearchesOpen);
  // };

  // const handleDeleteClick = keywords => {
  //   const { [keywords]: _keywords, ...rest } = topSearches;
  //   setTopSearches(rest);
  //   searchService
  //     .deleteOneOfMyTopSearches(keywords)
  //     .then()
  //     .catch(() => dispatch(openSnackbar({ message: "Deletion actually failed in remote" })));
  // };

  return (
    <>
      {/*<Fab onClick={handleTopSearchesClick} buttonRef={topSearchButtonRef}>*/}
      {/*  <HistoryOutlined />*/}
      {/*</Fab>*/}
      {/*<Popper*/}
      {/*  open={isTopSearchesOpen}*/}
      {/*  onClick={handleTopSearchesClick}*/}
      {/*  anchorEl={topSearchButtonRef.current}*/}
      {/*  placement="right-end"*/}
      {/*>*/}
      {/*  <Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }}>*/}
      {/*    <StyledPopperContent className="handle">*/}
      {/*      {Object.entries(topSearches).map(([keywords, value]) => {*/}
      {/*        return (*/}
      {/*          <Badge badgeContent={value || "0"} color={"secondary"}>*/}
      {/*            <Chip*/}
      {/*              onClick={() => {*/}
      {/*                onKeywordsChange(keywords);*/}
      {/*                setTopSearchesOpen(true);*/}
      {/*              }}*/}
      {/*              label={keywords}*/}
      {/*              onDelete={() => handleDeleteClick(keywords)}*/}
      {/*            />*/}
      {/*          </Badge>*/}
      {/*        );*/}
      {/*      })}*/}
      {/*    </StyledPopperContent>*/}
      {/*  </Draggable>*/}
      {/*</Popper>*/}
    </>
  );
};
export default TopSearches;
