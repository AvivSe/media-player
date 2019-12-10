import React from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import styled from "styled-components";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "../../scss/ag-grid.scss";
import FullDetailsCellRenderer from "./cell-renderers/FullDetailsCellRenderer";
import DurationFormatter from "./cell-renderers/DurationFormatter";
import ImageCellRenderer from "./cell-renderers/ImageCellRenderer";
import PlayCellRenderer from "./cell-renderers/PlayCellRenderer";

const AgGridWrapper = styled.div`
  width: 100%;
  height: 75vh;
  .ag-body-horizontal-scroll {
    display: none;
  }
`;

const Listing = ({ onGridReady, onDialogOpen }) => {
  const defaultColumnDefs = [
    { headerName: "", field: "artworkUrl100", cellRenderer: "ImageCellRenderer", width: 60 },
    { headerName: "Artist", field: "artistName", width: 140 },
    { headerName: "Collection", field: "collectionName", width: 140 },
    { headerName: "Track", field: "trackName", width: 140 },
    { headerName: "Price", field: "trackPrice", width: 80 },
    { headerName: "Genre", field: "primaryGenreName", width: 80 },
    { headerName: "Duration", field: "trackTimeMillis", cellRenderer: "DurationFormatter", width: 80 },
    { headerName: "", cellRenderer: "PlayCellRenderer", width: 50},

    {
      headerName: "",
      field: "trackId",
      cellRenderer: "FullDetailsCellRenderer",
      cellRendererParams: { onDialogOpen },
      width: 50
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
          PlayCellRenderer
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
