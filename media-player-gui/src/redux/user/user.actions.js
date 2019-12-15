import userService from "../../services/user.service";
import { openSnackbar } from "../ui/ui.actions";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const DELETE_ONE_USER_REQUEST = "DELETE_ONE_USER_REQUEST";
export const DELETE_ONE_USER_SUCCESS = "DELETE_ONE_USER_SUCCESS";
export const DELETE_ONE_USER_ERROR = "DELETE_ONE_USER_ERROR";

export const DELETE_USERS_REQUEST = "DELETE_USERS_REQUEST";
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";
export const DELETE_USERS_ERROR = "DELETE_USERS_ERROR";

export const UPDATE_TOP_SEARCHES_FOR_SPECIFIC_USER = "UPDATE_TOP_SEARCHES_FOR_SPECIFIC_USER";

export const fetchUsers = params => async dispatch => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const result = await userService.find(params);
    //dispatch(openSnackbar({ message: `Fetched ${result.data.lastRow} users successfully`}));
    dispatch({ type: FETCH_USERS_SUCCESS, payload: result.data });
  } catch (e) {
    dispatch({ type: FETCH_USERS_ERROR });
    dispatch(openSnackbar(e));
  }
};

export const updateUser = (username, user) => async dispatch => {
  dispatch({ type: UPDATE_USER_REQUEST });
  try {
    const result = await userService.update(username, user);
    dispatch({ type: UPDATE_USER_SUCCESS, payload: result.data });
    dispatch(openSnackbar({ message: `${username} is updated successfully`}));
  } catch (e) {
    dispatch({ type: UPDATE_USER_ERROR });
    dispatch(openSnackbar(e));
  }
};

export const deleteOneUser = username => async dispatch => {
  dispatch({ type: DELETE_ONE_USER_REQUEST });
  try {
    await userService.deleteOne(username);
    dispatch({ type: DELETE_ONE_USER_SUCCESS, payload: username });
    dispatch(openSnackbar({ message: `${username} is deleted successfully`}));
  } catch (e) {
    dispatch({ type: DELETE_ONE_USER_ERROR });
    dispatch(openSnackbar(e));
  }
};

export const deleteUsers = usernameList => async dispatch => {
  dispatch({ type: DELETE_USERS_REQUEST });
  try {
    const result = await userService.delete(usernameList);
    dispatch({ type: DELETE_USERS_SUCCESS, payload: usernameList });
    dispatch(openSnackbar({ message: `${result.data["deletedCount"]} deleted users successfully`}));
  } catch (e) {
    dispatch({ type: FETCH_USERS_ERROR });
    dispatch(openSnackbar(e));
  }
};
