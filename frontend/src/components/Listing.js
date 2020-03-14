import React from "react";
import { AgGridReact } from "@ag-grid-community/react";

import { AllModules } from "@ag-grid-enterprise/all-modules";
import styled from "styled-components";
import FullDetailsCellRenderer from "./cell-renderers/FullDetailsCellRenderer";
import DurationFormatter from "./cell-renderers/DurationFormatter";
import ImageCellRenderer from "./cell-renderers/ImageCellRenderer";
import PlayCellRenderer from "./cell-renderers/PlayCellRenderer";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMedia } from "../redux/player/player.actions";
import { getSelectedMedia } from "../redux/player/player.selectors";

const AgGridWrapper = styled.div`
  width: 100%;
  height: 75vh;

  .ag-cell-focus {
    border: none !important;
  }
  .ag-icon {
    color: ${({ theme }) => theme.palette.secondary.main} !important;;
  }

  .ag-theme-material {
    color: ${({ theme }) => theme.palette.secondary.main} !important;
  }
`;

const Listing = ({ onGridReady, onDialogOpen }) => {
  const selectedMedia = useSelector(getSelectedMedia);
  const dispatch = useDispatch();

  const handleSelectedMediaChange = media => {
    dispatch(setSelectedMedia(media));
  };

  const defaultColumnDefs = [
    { headerName: "", field: "artworkUrl100", cellRenderer: "ImageCellRenderer", width: 25 },
    { headerName: "Artist", field: "artistName", width: 80 },
    { headerName: "Collection", field: "collectionName", width: 80 },
    { headerName: "Track", field: "trackName", width: 80,
    },
    //{ headerName: "Price", field: "trackPrice", width: 80 },
    { headerName: "Genre", field: "primaryGenreName", width: 40 },
    { headerName: "Duration", field: "trackTimeMillis", cellRenderer: "DurationFormatter", width: 40 },
    {
      cellRenderer: "PlayCellRenderer",
      cellRendererParams: { selectedMedia, onSelectedMediaChange: handleSelectedMediaChange },
      width: 40
    },
    // {
    //   width: 40,
    //   dndSource: true,
    // }
  ];

  return (
    <AgGridWrapper className="ag-theme-material">
      <AgGridReact
        onGridReady={onGridReady}
        cacheBlockSize={200}
        //suppressRowClickSelection={true}
        gridOptions={{ rowModelType: "serverSide" }}
        columnDefs={defaultColumnDefs}
        defaultColDef={{
          resizable: true,
          sortable: true,
          filter: true
        }}
        frameworkComponents={{
          FullDetailsCellRenderer,
          DurationFormatter,
          ImageCellRenderer,
          PlayCellRenderer
        }}
        cacheOverflowSize={2}
        maxConcurrentDatasourceRequests={1}
        maxBlocksInCache={10}
        animateRows={true}
        // rowDragManaged={true}
        modules={AllModules}
      />
    </AgGridWrapper>
  );
};

export default Listing;
