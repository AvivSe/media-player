import userService from "../../services/user.service";
import searchService from "../../services/media-search.service";

import { openSnackbar } from "../ui/ui.actions";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";

export const DELETE_ONE_USER_REQUEST = "DELETE_ONE_USER_REQUEST";
export const DELETE_ONE_USER_SUCCESS = "DELETE_ONE_USER_SUCCESS";
export const DELETE_ONE_USER_ERROR = "DELETE_ONE_USER_ERROR";

export const DELETE_USERS_REQUEST = "DELETE_USERS_REQUEST";
export const DELETE_USERS_SUCCESS = "DELETE_USERS_SUCCESS";
export const DELETE_USERS_ERROR = "DELETE_USERS_ERROR";

export const FETCH_ONE_USER = "FETCH_ONE_USER";
export const DELETE_ONE_TOP_SEARCH = "DELETE_ONE_TOP_SEARCH";

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
    dispatch(openSnackbar({ message: `${username} is updated successfully` }));
  } catch (e) {
    dispatch({ type: UPDATE_USER_ERROR });
    dispatch(openSnackbar(e));
  }
};

export const createUser = (user, onSuccess) => async dispatch => {
  dispatch({ type: CREATE_USER_REQUEST });
  try {
    const result = await userService.create(user);
    dispatch({ type: CREATE_USER_SUCCESS, payload: result.data });
    dispatch(openSnackbar({ message: `${result.data.username} is created successfully` }));
    if(onSuccess) {
      onSuccess();
    }
  } catch (e) {
    dispatch({ type: CREATE_USER_ERROR });
    dispatch(openSnackbar(e));
  }
};

export const deleteOneUser = username => async dispatch => {
  dispatch({ type: DELETE_ONE_USER_REQUEST });
  try {
    await userService.deleteOne(username);
    dispatch({ type: DELETE_ONE_USER_SUCCESS, payload: username });
    dispatch(openSnackbar({ message: `${username} is deleted successfully` }));
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
    dispatch(openSnackbar({ message: `${result.data["deletedCount"]} deleted users successfully` }));
  } catch (e) {
    dispatch({ type: FETCH_USERS_ERROR });
    dispatch(openSnackbar(e));
  }
};

export const fetchOneUser = username => async dispatch => {
  try {
    const result = await userService.findOne(username);
    dispatch({ type: FETCH_ONE_USER, payload: result.data });
  } catch (e) {
    dispatch(openSnackbar(e));
  }
};

export const deleteOneTopSearch = (username, keywords) => async dispatch => {
  try {
    const result = await searchService.deleteOneOfMyTopSearches(keywords);
    dispatch({ type: DELETE_ONE_TOP_SEARCH, payload: { topSearches: result.data, username } });
    dispatch(fetchOneUser(username));
    dispatch(openSnackbar({message: `${keywords} removed`}));
  } catch (e) {
    dispatch(openSnackbar(e));
  }
};
