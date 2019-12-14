import { LOGIN_SUCCESS } from "./auth.actions";

export const INITIAL_STATE = {
  token: null, username: null, firstName: null
};

function authReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, ...payload };
    default:
      return state;
  }
}

export default authReducer;
