import { useState } from "react";

const usePreloader = ({ position: _position }) => {
  const [position, setPosition] = useState(_position || { x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleSetPosition = ({ position: optionalPosition }) => setPosition(optionalPosition || _position);

  const handleSetVisible = visible => setVisible(visible);

  const handleSetPlaying = playing => setPlaying(playing);

  return {
    position,
    onPositionChange: handleSetPosition,
    visible,
    onVisibleChange: handleSetVisible,
    playing,
    handleSetPlaying
  };
};

export default usePreloader;
