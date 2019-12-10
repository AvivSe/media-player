import React from "react"
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../../scss/ag-grid.scss'
import ResultsTable from "./ResultsTable";
import Options from "./Options";
import SearchBox from "./SearchBox";
import Dialog from "../Dialog";
import useSearch from "../../hooks/useSearch";

const Wrapper = styled.div`
  min-width: 1200px;
  .ag-cell-focus {
     border: none !important;
  }
`;

const Header = styled.div`
  background-color: ${(({theme}) => theme.palette.primary.main)};
`;

export default () => {
  const {useKeywords, useGridApi, useDialog, useOptions, useHandlers} = useSearch();
  const [dialog, ] = useDialog;

  return (
    <Wrapper>
      <Header>
        <SearchBox useKeywords={useKeywords} useHandlers={useHandlers} useOptions={useOptions}/>
        <Options useOptions={useOptions}/>
        <ResultsTable useHandlers={useHandlers} useGridApi={useGridApi}/>
      </Header>
      <Dialog useDialog={useDialog} useHandlers={useHandlers}>
        {dialog && dialog.content}
      </Dialog>
    </Wrapper>
  )
}
