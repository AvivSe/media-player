import React, {useState} from "react"
import styled from 'styled-components'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
import '../../scss/ag-grid.scss'
import DatasourceAgGridAdapter from '../../backend-bridge/datasource.ag-grid.adapter'
import mediaSearchService from "../../backend-bridge/media-search.service";
import SearchBox from "./SearchBox";
import ResultsTable from "./ResultsTable";
import MoreDetailsModal from "./MoreDetailsModal";
import Options, {GRID_MODE_OPT, SEARCH_AS_YOU_TYPE_OPT} from "./Options";
import FullDetailes from "./Media";

const Wrapper = styled.div`
  width: 70vw;
`;

export default () => {
  const [keywords, setKeyword] = useState('');
  const [gridApi, setGridApi] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [options, setOptions] = useState({
    [SEARCH_AS_YOU_TYPE_OPT]: true,
    [GRID_MODE_OPT]: false,
  });

  const handleOpen = media => {
    setModalContent(<FullDetailes media={media}/>);
    setOpen(true)
  };

  const onGridReady = ({api}) => {
    setGridApi(api);
    api.handleMoreDetailsClicked = handleOpen;
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = e => {
    if (!!gridApi && !!keywords) {
      gridApi.setServerSideDatasource(new DatasourceAgGridAdapter(mediaSearchService, keywords));
      gridApi.sizeColumnsToFit();
    }
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <Wrapper>
      <SearchBox handleSubmit={handleSubmit} handleChange={handleChange}
                 searchAsYouType={options[SEARCH_AS_YOU_TYPE_OPT]}/>
      <Options useOptions={() => [options, setOptions]}/>
      {!!keywords && <ResultsTable onGridReady={onGridReady} setModalOpen={handleOpen}/>}
      <MoreDetailsModal open={open} handleClose={handleClose}>
        {modalContent}
      </MoreDetailsModal>
    </Wrapper>
  )
}
