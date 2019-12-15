import React from "react";
import { Dialog as MuiDialog, IconButton, makeStyles, Slide, Toolbar } from "@material-ui/core";
import { FaTimesCircle as CloseIcon } from "react-icons/fa";
import styled from "styled-components";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MainContent = styled.div`
  margin: 4rem auto;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: default;
`;

const StyledDialog = styled(MuiDialog)`

.MuiPaper-root {
  background-color: ${({ theme }) => theme.palette.secondary.light};
}
`;


const Dialog = ({ children, open, onDialogClose }) => {
  return (
    <StyledDialog fullScreen open={open} onClose={onDialogClose}>
        <Toolbar>
          <IconButton edge="start" onClick={onDialogClose} aria-label="close">
            <CloseIcon style={{ fill: "white" }} />
          </IconButton>
        </Toolbar>
      <MainContent>{children}</MainContent>
    </StyledDialog>
  );
};

export default Dialog;
