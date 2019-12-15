import authService from "../../services/auth.service";
import { openSnackbar } from "../ui/ui.actions";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const LOGOUT = "LOGOUT";

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

export const signUp = (username, password, retypePassword, firstName, lastName) => async dispatch => {
  dispatch({ type: SIGNUP_REQUEST });

  try {
    const result = await authService.signUp(username, password, retypePassword, firstName, lastName);
    dispatch({ type: SIGNUP_SUCCESS, payload: result.data });
  } catch (e) {
    dispatch({ type: SIGNUP_ERROR });
    dispatch(openSnackbar(e));
  }
};

export const logout = () => {
  return { type: LOGOUT }
};
