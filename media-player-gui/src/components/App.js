import React from 'react';
import styled from 'styled-components';
import darkMuiTheme from '../theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {ThemeProvider as ScThemeProvider} from 'styled-components';
import Table from "./media-list/Table";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
`;

export default () => (
  <MuiThemeProvider theme={darkMuiTheme}>
    <ScThemeProvider theme={darkMuiTheme}>
    <Wrapper>
      <Table/>
    </Wrapper>
    </ScThemeProvider>
  </MuiThemeProvider>
);
