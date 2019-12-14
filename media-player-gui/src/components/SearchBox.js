import React from "react";
import TextField from "./form-kit/TextField";
import styled from "styled-components";
import { SEARCH_AS_YOU_TYPE_OPT } from "./OptionsSpeedDial";
import Fab from "@material-ui/core/Fab";
import { SearchOutlined } from "@material-ui/icons";

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const StyledFab = styled(Fab)`
  margin-inline-start: 10px;
  background-color: ${({ theme }) => theme.palette.secondary.text};
  .MuiFab-root {
    width: 60px;
    height: 60px;
  }
`;
const SearchBox = ({ options, keywords, onKeywordsChange, onSubmit }) => {
  const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];

  const handleChange = e => {
    onKeywordsChange(e.target.value);
  };

  const handleEnterPress = ({ key }) => (key === "Enter" ? onSubmit() : null);

  return (
    <Row>
      <TextField
        fullWidth
        label={searchAsYouType ? SEARCH_AS_YOU_TYPE_OPT : "Search"}
        onChange={handleChange}
        value={keywords}
        onKeyPress={searchAsYouType ? null : handleEnterPress}
      />
      {!searchAsYouType && (
        <StyledFab onClick={onSubmit}>
          <SearchOutlined />
        </StyledFab>
      )}
    </Row>
  );
};

export default SearchBox;
