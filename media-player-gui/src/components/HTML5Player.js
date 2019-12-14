import React, { useEffect, useState } from "react";
import { useVideo } from "react-use";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import Fab from "@material-ui/core/Fab";
import {
  FastForwardOutlined,
  FastRewindOutlined,
  Fullscreen,
  FullscreenExit,
  PauseOutlined,
  PlayArrowOutlined,
  SkipNextOutlined,
  SkipPreviousOutlined,
  VolumeOffOutlined,
  VolumeUpOutlined
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedMedia } from "../redux/player/player.selectors";
import { setSelectedMedia } from "../redux/player/player.actions";

const StyledVideo = styled.video`
  width: 100%;
`;

const Container = styled.div`
  width: ${({ isFullScreen }) => (isFullScreen ? "70vw" : "500px")};
`;

const VideoContainer = styled.div`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
`;

const Controls = styled.div`
  margin-top: -35px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
`;

const StyledFab = styled(Fab)`
  margin: 0 0.2rem;
  background-color: ${({ transparent }) => (transparent ? "transparent" : null)};
`;

const HTML5Player = () => {
  const selectedMedia = useSelector(getSelectedMedia);
  const isVideo = !!selectedMedia && selectedMedia.kind === "feature-movie";
  const [isMute, setIsMute] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [video, state, controls] = useVideo(
    <StyledVideo src={selectedMedia && selectedMedia["previewUrl"]} autoPlay />
  );

  useEffect(()=> {
    if(isMute) {
      controls.mute();
    } else {
      controls.unmute();
    }
  }, [isMute, controls]);

  useEffect(() => {
    if (!selectedMedia) {
      controls.pause();
    }
  }, [selectedMedia, controls]);

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
    setIsFullScreen(!isFullScreen);
  };

  const handleMuteButtonClick = () => {
    setIsMute(!isMute);
  };

  return (
    <Container isFullScreen={isFullScreen}>
      <VideoContainer hidden={!isVideo}>
        <LinearProgress variant="determinate" value={progress} color={"primary"} />
        {video}
      </VideoContainer>
      <Controls>
          <StyledFab color="primary" size="small" onClick={handleMuteButtonClick}>
            {isMute ? <VolumeOffOutlined /> : <VolumeUpOutlined />}
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
        {isVideo && (
          <StyledFab color="primary" size="small" onClick={handleClickFullScreen}>
            {isFullScreen ? <FullscreenExit /> : <Fullscreen />}
          </StyledFab>
        )}
      </Controls>
    </Container>
  );
};

export default HTML5Player;
