import Fab from "@material-ui/core/Fab";
import { HistoryOutlined } from "@material-ui/icons";
import Popper from "@material-ui/core/Popper";
import Chip from "@material-ui/core/Chip";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { useDispatch, useSelector } from "react-redux";
import { getMyTopSearches, getProfile } from "../redux/auth/auth.selectors";
import Draggable from "react-draggable";
import { deleteOneTopSearch, fetchOneUser } from "../redux/user/user.actions";

const StyledPopperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
`;
const TopSearches = ({ onKeywordsChange }) => {
  const topSearchButtonRef = useRef();
  const [isTopSearchesOpen, setTopSearchesOpen] = React.useState(false);
  const profile = useSelector(getProfile);
  const topSearches = useSelector(getMyTopSearches);
  const dispatch = useDispatch();
  const handleTopSearchesClick = () => {
    if(!isTopSearchesOpen) {
      dispatch(fetchOneUser(profile.username))
    }
    setTopSearchesOpen(!isTopSearchesOpen);
  };

  const handleDeleteClick = keywords => {
    dispatch(deleteOneTopSearch(profile.username, keywords));
  };

  return (
    <>
      <Fab onClick={handleTopSearchesClick} buttonRef={topSearchButtonRef}>
        <HistoryOutlined />
      </Fab>
      <Popper
        open={isTopSearchesOpen}
        onClick={handleTopSearchesClick}
        anchorEl={topSearchButtonRef.current}
        placement="right-end"
      >
        <Draggable handle=".handle" defaultPosition={{ x: 0, y: 0 }}>
          <StyledPopperContent className="handle">
            {topSearches &&
              Object.entries(topSearches).map(([keywords, value]) => {
                return (
                  <Badge badgeContent={value || "0"} color={"secondary"}>
                    <Chip
                      onClick={() => {
                        onKeywordsChange(keywords);
                        setTopSearchesOpen(true);
                      }}
                      label={keywords}
                      onDelete={() => handleDeleteClick(keywords)}
                    />
                  </Badge>
                );
              })}
          </StyledPopperContent>
        </Draggable>
      </Popper>
    </>
  );
};
export default TopSearches;
