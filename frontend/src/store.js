import { applyMiddleware, createStore } from "redux";
import reducers from "./redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
