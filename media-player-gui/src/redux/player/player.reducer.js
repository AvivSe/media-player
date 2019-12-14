import { SET_SELECTED_MEDIA } from "../player/player.actions";

export const playerInitialState = {
  selectedMedia: { previewUrl: "http://www.anyvision.co/admin/wp-content/uploads/2018/02/4.mp4", kind: "feature-movie", trackName: "AnyVision"  }
};

function playerReducer(state = playerInitialState, { type, payload }) {
  switch (type) {
    case SET_SELECTED_MEDIA:
      return { ...state, selectedMedia: payload };
    default:
      return state;
  }
}

export default playerReducer;
