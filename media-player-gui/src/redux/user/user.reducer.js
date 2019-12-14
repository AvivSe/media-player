import {
  DELETE_ONE_USER_SUCCESS,
  DELETE_USERS_SUCCESS,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_SUCCESS
} from "./user.actions";

export const INITIAL_STATE = {
  rows: []
};

function userReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_USERS_SUCCESS:
    case UPDATE_USER_SUCCESS:
    case DELETE_USERS_SUCCESS:
    case DELETE_ONE_USER_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
}

export default userReducer;
