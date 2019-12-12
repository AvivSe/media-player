import { useEffect, useState } from "react";

const usePreloader = ({ position: _position, visible: _visible } = { position: { x: 0, y: 0 }, visible: true }) => {
  const [position, setPosition] = useState(_position);
  const [visible, setVisible] = useState(_visible);
  const [drag, setDrag] = useState(false);

  const handlePositionChange = ({ position: optionalPosition }) => setPosition(optionalPosition || _position);

  const handleVisibleChange = visible => setVisible(visible);

  const handleDragChange = drag => setDrag(drag);

  return {
    position,
    onPositionChange: handlePositionChange,
    visible,
    onVisibleChange: handleVisibleChange,
    drag,
    onDragChange: handleDragChange
  };
};

export default usePreloader;
