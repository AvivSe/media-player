import React from 'react';
import {Checkbox as MuiCheckbox, FormControlLabel as MuiFormControlLabel,} from '@material-ui/core';
import styled from 'styled-components';

const CheckboxWrapper = styled.div`
    border: ${({error}) => (error ? '1px solid red' : null)};
    border-radius: 3px;
    color: ${({error}) => (error ? 'red' : null)};
`;

const StyledMuiFormControlLabel = styled(MuiFormControlLabel)`
    margin: unset;
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: .5rem;
`;

const HelperText = styled.div`
    margin: unset;
    font-size: 0.75rem;
    color: red;
`;

export default ({label, value, error, helperText, ...props}) => {
  return (
    <Flex>
      <CheckboxWrapper error={error}>
        <StyledMuiFormControlLabel
          control={<MuiCheckbox labelStyle={{color: 'white'}} {...props} checked={value}/>} label={label}
        />
      </CheckboxWrapper>
      {error && <HelperText>{helperText}</HelperText>}
    </Flex>
  );
};
