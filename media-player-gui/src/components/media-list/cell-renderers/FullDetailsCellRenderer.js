import React from "react";
import MoreVert from "@material-ui/icons/MoreVert";
import styled from "styled-components";

const StyledMoreVert = styled(MoreVert)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.light};
`;

const FullDetailsCellRenderer = ({ getValue, onDialogOpen }) => {
  const value = getValue();
  if (!!onDialogOpen && typeof onDialogOpen === "function") {
    return (
      <StyledMoreVert
        onClick={() => {
          onDialogOpen({ value });
        }}
      >
        {value}
      </StyledMoreVert>
    );
  } else {
    return null;
  }
};
export default FullDetailsCellRenderer;
