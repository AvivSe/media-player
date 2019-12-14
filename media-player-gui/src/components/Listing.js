import React, { useContext } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-material/sass/ag-theme-material.scss";

import { AllModules } from "@ag-grid-enterprise/all-modules";
import styled from "styled-components";
import FullDetailsCellRenderer from "./cell-renderers/FullDetailsCellRenderer";
import DurationFormatter from "./cell-renderers/DurationFormatter";
import ImageCellRenderer from "./cell-renderers/ImageCellRenderer";
import PlayCellRenderer from "./cell-renderers/PlayCellRenderer";
import { MediaPlayerContext } from "./../contexts";
import MediaTypeCellRenderer from "./cell-renderers/MediaTypeCellRenderer";

const AgGridWrapper = styled.div`
  width: 100%;
  height: 75vh;
  
  .ag-cell-focus {
    border: none !important;
  }
   .ag-icon {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const Listing = ({ onGridReady, onDialogOpen }) => {
  const { selected, onSelectedChange } = useContext(MediaPlayerContext);

  const defaultColumnDefs = [
    { headerName: "", field: "artworkUrl100", cellRenderer: "ImageCellRenderer", width: 60 },
    { headerName: "Artist", field: "artistName", width: 140 },
    { headerName: "Collection", field: "collectionName", width: 140 },
    { headerName: "Track", field: "trackName", width: 140 },
    { headerName: "Price", field: "trackPrice", width: 80 },
    { headerName: "Genre", field: "primaryGenreName", width: 80 },
    { headerName: "Duration", field: "trackTimeMillis", cellRenderer: "DurationFormatter", width: 80 },
    { headerName: "", field: "kind", cellRenderer: "MediaTypeCellRenderer", width: 40 },
    {
      headerName: "",
      field: "trackId",
      cellRenderer: "PlayCellRenderer",
      cellRendererParams: { selected, onSelectedChange },
      width: 40
    },

    {
      headerName: "",
      field: "trackId",
      cellRenderer: "FullDetailsCellRenderer",
      cellRendererParams: { onDialogOpen },
      width: 40
    }
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
          PlayCellRenderer,
          MediaTypeCellRenderer
        }}
        cacheOverflowSize={2}
        maxConcurrentDatasourceRequests={1}
        maxBlocksInCache={10}
        modules={AllModules}
      />
    </AgGridWrapper>
  );
};

export default Listing;
