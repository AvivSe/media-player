import uiReducer from './ui.reducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  ui: uiReducer,
});

export default reducers;
