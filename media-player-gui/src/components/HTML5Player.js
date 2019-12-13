import React, { useContext, useEffect, useState } from "react";
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
  FastRewindOutlined,
  Fullscreen,
  FullscreenExit,
  ExpandLess,
  ExpandMore
} from "@material-ui/icons";

const StyledVideo = styled.video`
  width: 100%;
`;

const Container = styled.div`
  width: ${({ isFullScreen }) => (isFullScreen ? "70vw" : "500px")};
`;

const VideoContainer = styled.div`
  display: ${({ isMinimized }) => (isMinimized ? "none" : "block")};
`;
const VideoWrapper = styled.div``;

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  height: 0;
  width: 0;
`;

const Controls = styled.div`
  margin: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFab = styled(Fab)`
  margin: 0 0.2rem;
  background-color: ${({ transparent }) => (transparent ? "transparent" : null)};
`;

const HTML5Player = ({ initialUrl }) => {
  const { selected, onSelectedChange } = useContext(MediaPlayerContext) || {};
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [video, state, controls, ref] = useVideo(
    <StyledVideo
      src={
        (selected && selected["previewUrl"]) ||
        initialUrl ||
        "http://www.anyvision.co/admin/wp-content/uploads/2018/02/4.mp4"
      }
      autoPlay
    />
  );

  const { time, duration, paused } = state;

  const progress = (time / duration) * 100;

  const handleClickSkip = () => {
    alert("todo");
  };

  const handleClickPlay = () => {
    controls.play();
  };

  const handleClickPause = () => {
    controls.pause();
  };

  const handleClickFastRewind = () => {
    controls.seek(state.time - 5);
  };

  const handleClickFastForward = () => {
    controls.seek(state.time - 5);
  };

  const handleClickFullScreen = () => {
    setIsMinimized(false);
    setIsFullScreen(!isFullScreen);
  };

  const handleClickMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  // delete this when fix pause action
  useEffect(() => {
    setInterval(handleClickFastRewind, 10000);
  }, []);

  return (
    <Wrapper>
      <Draggable handle=".handle">
        <div className={"handle"}>
          <Container isFullScreen={isFullScreen}>
            <VideoContainer isMinimized={isMinimized}>
              <LinearProgress variant="determinate" value={progress} color={"secondary"} />
              <VideoWrapper>{video}</VideoWrapper>
            </VideoContainer>
            <div>
              <Controls>
                <StyledFab color="primary" size="small" onClick={handleClickMinimize}>
                  {isMinimized ? <ExpandLess /> : <ExpandMore />}
                </StyledFab>
                <StyledFab size="small" color="primary" onClick={handleClickSkip}>
                  {<SkipPreviousOutlined />}
                </StyledFab>
                <StyledFab size="medium" color="primary" onClick={handleClickFastRewind}>
                  {<FastRewindOutlined />}
                </StyledFab>
                <StyledFab color="primary" onClick={paused ? handleClickPlay : handleClickPause}>
                  {paused ? <PlayArrowOutlined /> : <PauseOutlined />}
                </StyledFab>
                <StyledFab size="medium" color="primary" onClick={handleClickFastForward}>
                  {<FastForwardOutlined />}
                </StyledFab>
                <StyledFab size="small" color="primary" onClick={handleClickSkip}>
                  {<SkipNextOutlined />}
                </StyledFab>
                <StyledFab color="primary" size="small" onClick={handleClickFullScreen}>
                  {isFullScreen ? <FullscreenExit /> : <Fullscreen />}
                </StyledFab>
              </Controls>
            </div>
          </Container>
        </div>
      </Draggable>
    </Wrapper>
  );
};

export default HTML5Player;
