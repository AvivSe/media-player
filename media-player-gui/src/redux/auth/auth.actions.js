import authService from "../../services/auth.service";
import { openSnackbar } from "../ui/ui.actions";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const result = await authService.login(username, password);
    dispatch({ type: LOGIN_SUCCESS, payload: result.data });
  } catch (e) {
    dispatch({ type: LOGIN_ERROR });
    dispatch(openSnackbar(e));
  }
};
