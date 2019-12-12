import React, { useContext } from "react";
import { useVideo } from "react-use";
import { MediaPlayerContext } from "./../contexts";
import styled from "styled-components";
import Draggable from "react-draggable";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fab from "@material-ui/core/Fab";
import {
  PlayArrowOutlined,
  PauseOutlined,
  SkipPreviousOutlined,
  SkipNextOutlined,
  FastForwardOutlined,
  FastRewindOutlined
} from "@material-ui/icons";

const StyledVideo = styled.video`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 1000px;
  width: 600px;
`;

const Controls = styled.div`
  margin: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFab = styled(Fab)`
  margin: 0 .2rem;
`;
const HTML5Player = ({ initialUrl }) => {
  const { selected, onSelectedChange } = useContext(MediaPlayerContext) || { };
  const [video, state, controls, ref] = useVideo(
    <StyledVideo
      src={(selected && selected["previewUrl"]) || initialUrl || "http://www.anyvision.co/admin/wp-content/uploads/2018/02/4.mp4"}
      autoPlay
    />
  );
  const { time, duration, paused } = state;

  const progress = (time / duration) * 100;

  const handleClickSkip = index => {alert("todo")};

  return (
    <Draggable handle=".handle" defaultPosition={{ x: 300, y: 500 }} grid={null} enableUserSelectHack={true} scale={2}>
      <div className={"handle"}>
        <Wrapper>
          <LinearProgress variant="determinate" value={progress} color={"secondary"} />
          {video}
          <Controls>
            <StyledFab size="small" color="primary" onClick={handleClickSkip}>
              {<SkipPreviousOutlined />}
            </StyledFab>
            <StyledFab size="medium" color="primary" onClick={() => controls.seek(state.time - 5)}>
              {<FastRewindOutlined />}
            </StyledFab>
            <StyledFab size="large" color="primary" onClick={paused ? controls.play : controls.pause}>
              {paused ? <PlayArrowOutlined /> : <PauseOutlined />}
            </StyledFab>
            <StyledFab size="medium" color="primary" onClick={() => controls.seek(state.time + 5)}>
              {<FastForwardOutlined />}
            </StyledFab>
            <StyledFab size="small" color="primary" onClick={handleClickSkip}>
              {<SkipNextOutlined />}
            </StyledFab>
          </Controls>
          {/*{JSON.stringify({ state, progress })}*/}
        </Wrapper>
      </div>
    </Draggable>
  );
};

export default HTML5Player;
