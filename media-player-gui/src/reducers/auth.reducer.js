import { LOGIN } from "../actions/auth.actions";

export const uiInitialState = {
  auth: { AUTH_TOKEN: null, username: null, firstName: null }
};

function authReducer(state = uiInitialState, { type, ...auth }) {
  switch (type) {
    case LOGIN:
      return { ...auth };
    default:
      return state;
  }
}

export default authReducer;
