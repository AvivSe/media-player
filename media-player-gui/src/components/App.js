import React from "react";
import styled, { ThemeProvider as ScThemeProvider } from "styled-components";
import darkMuiTheme from "../theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import MediaPlayer from "./MediaPlayer";
import { StylesProvider } from "@material-ui/styles";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Routing from "./Routing";

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

const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={darkMuiTheme}>
      <ScThemeProvider theme={darkMuiTheme}>
        <Wrapper>
          <Routing/>
        </Wrapper>
      </ScThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;
