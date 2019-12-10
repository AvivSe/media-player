import React from "react";
import MoreVert from '@material-ui/icons/MoreVert';
import styled from 'styled-components'
const StyledMoreVert = styled(MoreVert)`
  cursor: pointer;
  color: ${({theme})=>theme.palette.primary.light};
`;
export default ({getValue, api}) => {
  const value = getValue();
  const handleMoreDetailsClicked = api['handleMoreDetailsClicked'];
  if (typeof handleMoreDetailsClicked === 'function') {
    return <StyledMoreVert onClick={() => {
      handleMoreDetailsClicked({value})
    }}>{value}</StyledMoreVert>
  }
};
