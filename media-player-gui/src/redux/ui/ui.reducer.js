import { CLOSE_SNACKBAR, OPEN_SNACKBAR } from "./ui.actions";

export const uiInitialState = {
  snackbar: { open: false, message: "", duration: 2000 }
};

function uiReducer(state = uiInitialState, { type, ...payload }) {
  switch (type) {
    case OPEN_SNACKBAR:
      return { snackbar: { ...state.snackbar, ...payload, open: true } };
    case CLOSE_SNACKBAR:
      return {
        snackbar: { ...state.snackbar, open: false }
      };
    default:
      return state;
  }
}

export default uiReducer;
