export const getIsAuthenticated = state => !!state.auth.token;
export const getProfile = state => state.auth && state.auth.profile;
