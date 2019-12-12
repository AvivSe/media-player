import React from "react";
import styled, { ThemeProvider as ScThemeProvider } from "styled-components";
import darkMuiTheme from "../theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import Routing from "./Routing";
import usePreloader from "../hooks/usePreloder";
import { PreloaderContextProvider } from "../contexts";
import Snackbar from "@material-ui/core/Snackbar";
import { connect } from "react-redux";
import { closeSnackbar } from "../actions/ui.actions";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  ${({ theme }) =>
    theme.palette.type === "dark"
      ? `
      background-color: #2d3436;
      background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  `
      : null};
  color: ${({ theme }) => theme.palette.primary.text};
`;

const App = ({ snackbar, closeSnackbar }) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={darkMuiTheme}>
      <ScThemeProvider theme={darkMuiTheme}>
        <PreloaderContextProvider value={usePreloader()}>
          <Wrapper>
            <Routing />
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              open={!!snackbar.open}
              autoHideDuration={snackbar.duration}
              onClose={closeSnackbar}
              ContentProps={{
                "aria-describedby": "message-id"
              }}
              message={snackbar.message}
            />
          </Wrapper>
        </PreloaderContextProvider>
      </ScThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

const mapStateToProps = state => {
  return {
    snackbar: state.ui.snackbar
  };
};

export default connect(mapStateToProps, {
  closeSnackbar
})(App);
