import { createStore } from "redux";
import reducers from "./reducers";
import { uiInitialState } from "./reducers/ui.reducer";

const initialState = {
  ui: uiInitialState
};

export default createStore(
  reducers,
  initialState,
  window["__REDUX_DEVTOOLS_EXTENSION__"] && window["__REDUX_DEVTOOLS_EXTENSION__"]()
);
