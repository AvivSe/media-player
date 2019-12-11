import React, { useState } from "react";
import { PlayArrowOutlined, StopOutlined, PlayArrow, Stop } from "@material-ui/icons";

import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

const PlayCellRenderer = ({playing, setPlaying}) => {
  const [hovered, sethHovered] = useState(false);

  return (
    <Wrapper
      onClick={() => setPlaying && setPlaying(!playing)}
      onMouseEnter={() => sethHovered(true)}
      onMouseLeave={() => sethHovered(false)}
    >
      {playing && (
        <>
        {hovered && <Stop className={"filled"} />}
        {!hovered && <StopOutlined className={"outlined"} />}
        </>
      )}
      {!playing && (
        <>
          {hovered && <PlayArrow className={"filled"} />}
          {!hovered && <PlayArrowOutlined className={"outlined"} />}
        </>
      )}
    </Wrapper>
  );
};

export default PlayCellRenderer;
