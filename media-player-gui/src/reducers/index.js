import uiReducer from './ui.reducer';
import { combineReducers } from 'redux';
import authReducer from "./auth.reducer";

const reducers = combineReducers({
  ui: uiReducer,
  auth: authReducer,
});

export default reducers;
