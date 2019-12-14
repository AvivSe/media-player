import React from "react";
import styled, { ThemeProvider as ScThemeProvider } from "styled-components";
import darkMuiTheme from "../theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import Routing from "./Routing";
import Snackbar from "@material-ui/core/Snackbar";
import { connect, useDispatch, useSelector } from "react-redux";
import { closeSnackbar } from "../redux/ui/ui.actions";
import { getSnackbar } from "../redux/ui/ui.selectors";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  min-height: 100vh;
  ${({ theme }) =>
    theme.palette.type === "dark"
      ? `
      background-color: #2d3436;
      background-image: linear-gradient(315deg, #2d3436 25%, #000000 100%);
  `
      : null};
  color: ${({ theme }) => theme.palette.primary.text};
`;

const MainContentViewport = styled.div`
  width: 80vw;
`;

const App = () => {
  const dispatch = useDispatch();
  const snackbar = useSelector(getSnackbar);

  const handleCloseSnackbarClick = () => dispatch(closeSnackbar());

  return <StylesProvider injectFirst>
    <MuiThemeProvider theme={darkMuiTheme}>
      <ScThemeProvider theme={darkMuiTheme}>
          <Wrapper>
            <MainContentViewport>
              <Routing />
            </MainContentViewport>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              open={!!snackbar.open}
              autoHideDuration={snackbar.duration}
              onClose={handleCloseSnackbarClick}
              ContentProps={{
                "aria-describedby": "message-id"
              }}
              message={snackbar.message}
            />
          </Wrapper>
      </ScThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
};

export default App;
