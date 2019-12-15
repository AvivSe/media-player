import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS
} from "./auth.actions";

export const INITIAL_STATE = {
  token: null, pending: false, profile: null,
};

function authReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {...state, pending: true};
    case LOGIN_ERROR:
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case SIGNUP_ERROR:
      return { ...state, ...payload, pending: false };
    case LOGOUT:
      return {...INITIAL_STATE};
    default:
      return state;
  }
}

export default authReducer;
