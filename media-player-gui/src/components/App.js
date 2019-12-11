import React from "react";
import styled, { ThemeProvider as ScThemeProvider } from "styled-components";
import darkMuiTheme from "../theme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import MediaPlayer from "./MediaPlayer";
import { StylesProvider } from "@material-ui/styles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
`;

const App = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={darkMuiTheme}>
      <ScThemeProvider theme={darkMuiTheme}>
        <Wrapper backgroundColor={darkMuiTheme.palette.primary.contrastText} color={darkMuiTheme.palette.primary.dark}>
          <MediaPlayer />
        </Wrapper>
      </ScThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;
