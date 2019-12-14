import uiReducer from "./ui/ui.reducer";
import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import userReducer from "./user/user.reducer";

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  user: userReducer
});

export default reducers;
