import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from "./auth.actions";

export const INITIAL_STATE = {
  token: null, username: null, firstName: null
};

function authReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, ...payload };
    case LOGOUT:
      return {...INITIAL_STATE};
    default:
      return state;
  }
}

export default authReducer;
