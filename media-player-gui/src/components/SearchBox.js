import React from "react";
import TextField from "./form-kit/TextField";
import Button from "./form-kit/Button";
import styled from "styled-components";
import { SEARCH_AS_YOU_TYPE_OPT } from "./Options";

const Row = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  min-width: 15rem !important;
  margin-inline-start: 10px !important;
`;
const SearchBox = ({ options, keywords, onKeywordsChange, onSubmit }) => {
  console.log(keywords);
  const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];

  const handleChange = e => {
    onKeywordsChange(e.target.value);
  };

  const handleEnterPress = ({ key }) => (key === "Enter" ? onSubmit() : null);

  return (
    <Row>
      <TextField
        fullWidth
        label={"Search as you type"}
        onChange={handleChange}
        value={keywords}
        onKeyPress={searchAsYouType ? null : handleEnterPress}
      />
      {!searchAsYouType && <StyledButton onClick={onSubmit}>Search</StyledButton>}
    </Row>
  );
};

export default SearchBox;
