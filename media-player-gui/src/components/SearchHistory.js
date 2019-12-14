import Fab from "@material-ui/core/Fab";
import { HistoryOutlined } from "@material-ui/icons";
import Popper from "@material-ui/core/Popper";
import Chip from "@material-ui/core/Chip";
import React, { useRef } from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import { getProfile } from "../redux/auth/auth.selectors";
import Draggable from "react-draggable";

const StyledPopperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 350px;
`;
const SearchHistory = ({ onKeywordsChange }) => {
  const topSearchButtonRef = useRef();
  const profile = useSelector(getProfile);
  const [isTopSearchesOpen, setTopSearchesOpen] = React.useState(false);
  const handleTopSearchesClick = () => {
    setTopSearchesOpen(!isTopSearchesOpen);
  };

  const handleDeleteClick = i => {};

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
            {profile &&
              profile["searchHistory"] &&
              Object.entries(profile["searchHistory"]).map(([keyword, value]) => {
                return (
                  <Badge
                    badgeContent={value || "0"}
                    color={"secondary"}
                  >
                    <Chip
                      onClick={() => {
                        onKeywordsChange(keyword);
                        setTopSearchesOpen(true);
                      }}
                      label={keyword}
                      onDelete={handleDeleteClick}
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
export default SearchHistory;
