import React from "react";
import { AppBar, Dialog as MuiDialog, IconButton, makeStyles, Slide, Toolbar } from "@material-ui/core";
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

const Dialog = ({ children, dialog, handleCloseDialog }) => {
  const classes = makeStyles(theme => ({
    appBar: {
      position: "relative"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  }));

  return (
    <MuiDialog fullScreen open={!!dialog} onClose={handleCloseDialog} TransitionComponent={Transition}>
      <AppBar className={classes["appBar"]}>
        <Toolbar>
          <IconButton edge="start" onClick={handleCloseDialog} aria-label="close">
            <CloseIcon style={{ fill: "white" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MainContent>{children}</MainContent>
    </MuiDialog>
  );
};

export default Dialog;
