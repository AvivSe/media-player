import React, { useContext, useState } from "react";
import { PlayArrowOutlined, Stop } from "@material-ui/icons";

import styled from "styled-components";
import { MediaPlayerContext } from "../MediaPlayer";

const Wrapper = styled.div`
  cursor: pointer;
`;

const PlayCellRenderer = ({ data }) => {
  const { selected, onSelectedChange } = useContext(MediaPlayerContext);
  const playing = selected && selected["trackId"] === data["trackId"];
  return (
    <Wrapper onClick={() => onSelectedChange(playing ? null : data)}>
      {playing ? <Stop /> : <PlayArrowOutlined />}
    </Wrapper>
  );
};

export default PlayCellRenderer;
