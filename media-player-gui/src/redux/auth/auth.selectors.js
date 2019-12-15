export const getIsAuthenticated = ({auth}) => !!auth.token;
export const getProfile = ({auth}) => auth.profile;
export const getLoginOrSignUpRequestIsPending = ({auth}) => auth.pending;
