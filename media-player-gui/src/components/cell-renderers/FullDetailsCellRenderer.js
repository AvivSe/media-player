import React from "react";
import MoreVert from "@material-ui/icons/MoreVert";
import styled from "styled-components";

const StyledMoreVert = styled(MoreVert)`
  cursor: pointer;
`;

const FullDetailsCellRenderer = ({ onDialogOpen, data }) => {
  if (!!onDialogOpen && typeof onDialogOpen === "function") {
    return (
      <StyledMoreVert
        onClick={() => {
          onDialogOpen(data);
        }}
      >
        {JSON.stringify(data)}
      </StyledMoreVert>
    );
  } else {
    return null;
  }
};
export default FullDetailsCellRenderer;
