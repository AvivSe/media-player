import React, {useEffect, useState} from "react";
import {GRID_MODE_OPT, SEARCH_AS_YOU_TYPE_OPT} from "../components/media-list/Options";
import DatasourceAgGridAdapter from "../backend-bridge/datasource.ag-grid.adapter";
import mediaSearchService from "../backend-bridge/media-search.service";
import Media from "../components/media-list/Media";

export default () => {
  const useKeywords = useState('');
  const useGridApi = useState(null);
  const useDialog = useState(null);
  const useOptions = useState({[SEARCH_AS_YOU_TYPE_OPT]: true, [GRID_MODE_OPT]: false,});

  const [keywords,] = useKeywords;
  const [gridApi,] = useGridApi;
  const [,setDialog] = useDialog;
  const [options] = useOptions;

  useEffect(() => {
    const searchAsYouType = options[SEARCH_AS_YOU_TYPE_OPT];
    if (searchAsYouType && !!gridApi && !!keywords) {
      gridApi.setServerSideDatasource(new DatasourceAgGridAdapter(mediaSearchService, keywords));
    }
  }, [keywords, gridApi, options]);

  useEffect(() => {
    if (!!gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi]);

  const handleCloseDialog = () => setDialog(null);

  const handleOpenDialog = content => setDialog(prevState => ({open: true, content: <Media media={content}/>}));

  const handleSubmit = () => {
    if (!!gridApi && !!keywords) {
      gridApi.setServerSideDatasource(new DatasourceAgGridAdapter(mediaSearchService, keywords));
      gridApi.sizeColumnsToFit();
    }
  };

  return {
    useKeywords,
    useGridApi,
    useDialog,
    useOptions,
    useHandlers: {
      handleSubmit,
      handleCloseDialog,
      handleOpenDialog
    }
  }
}
