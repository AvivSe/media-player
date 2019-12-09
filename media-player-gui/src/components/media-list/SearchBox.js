import React from "react";
import TextField from "../form-kit/TextField";
import Button from "../form-kit/Button";
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
`;

const StyledButton = styled(Button)`
  min-width: 15rem !important;
  margin-inline-start: 10px !important;
`;
export default ({handleSubmit, handleChange, useOptions, searchAsYouType}) => {
  const handleEnterPress =({key}) => {
    console.log(key);
    return  key === 'Enter' ? handleSubmit(): null;
  };
  return <Row>
    <TextField
      fullWidth
      label={'Search as you type'}
      onKeyPress={searchAsYouType ? handleSubmit : handleEnterPress}
      onChange={handleChange}
    />
    { !searchAsYouType && <StyledButton>Search</StyledButton> }
  </Row>
};
