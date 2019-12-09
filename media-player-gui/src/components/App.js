import React from 'react';
import ResultsTable from './ResultsTable';
import styled from 'styled-components';
import darkMuiTheme from '../theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {ThemeProvider as ScThemeProvider} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  background-color: black;
  
  
`;

export default () => (
  <MuiThemeProvider theme={darkMuiTheme}>
    <ScThemeProvider theme={darkMuiTheme}>
    <Wrapper>
      <ResultsTable/>
    </Wrapper>
    </ScThemeProvider>
  </MuiThemeProvider>
);
