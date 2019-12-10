import React from "react";
import TextField from "../form-kit/TextField";
import Button from "../form-kit/Button";
import styled from 'styled-components'
import {SEARCH_AS_YOU_TYPE_OPT} from "./Options";

const Row = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  min-width: 15rem !important;
  margin-inline-start: 10px !important;
`;
export default ({useHandlers, useOptions, useKeywords}) => {
  const [options] = useOptions;
  const [, setKeywords] = useKeywords;
  const {handleSubmit} = useHandlers;

  const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];

  const handleChange = e => {
    setKeywords(e.target.value);
  };

  const handleEnterPress = ({key}) => key === 'Enter' ? handleSubmit() : null;
  return <Row>
    <TextField
      fullWidth
      label={'Search as you type'}
      onChange={handleChange}
      onKeyPress={searchAsYouType ? null : handleEnterPress}
    />
    {!searchAsYouType && <StyledButton>Search</StyledButton>}
  </Row>
};
