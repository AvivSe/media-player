import uiReducer from "./ui/ui.reducer";
import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

export default reducers;
