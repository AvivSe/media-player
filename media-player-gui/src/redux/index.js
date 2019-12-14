import uiReducer from "./ui/ui.reducer";
import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import userReducer from "./user/user.reducer";
import playerReducer from "./player/player.reducer";

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
  player: playerReducer,
});

export default reducers;
