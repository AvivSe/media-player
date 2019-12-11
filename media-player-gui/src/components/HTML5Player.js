import React, { useContext } from "react";
import {useVideo} from 'react-use';
import { MediaPlayerContext } from "./MediaPlayer";

const HTML5Player = ({ media }) => {
  const {selected, onSelectedChange} = useContext(MediaPlayerContext);

  const [video, state, controls, ref] = useVideo(
    <video src={selected ? selected["previewUrl"] : "http://www.anyvision.co/admin/wp-content/uploads/2018/02/4.mp4"} autoPlay/>
  );

  return (
    <div>
      {video}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br/>
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br/>
      <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br/>
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  );
};

export default HTML5Player;
