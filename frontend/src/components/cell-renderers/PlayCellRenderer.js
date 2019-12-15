import React from "react";
import { PlayArrowOutlined, StopOutlined, VideocamOffOutlined, VideocamOutlined } from "@material-ui/icons";

import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

const PlayCellRenderer = ({ data, selectedMedia, onSelectedMediaChange }) => {
  const playing = selectedMedia && selectedMedia["trackId"] === data["trackId"];
  return (
    <Wrapper onClick={() => onSelectedMediaChange(playing ? null : data)}>
      {data["kind"] === "feature-movie" ? <VideocamOutlined /> : <VideocamOffOutlined />}
      {playing ? <StopOutlined /> : <PlayArrowOutlined />}
    </Wrapper>
  );
};

export default PlayCellRenderer;
