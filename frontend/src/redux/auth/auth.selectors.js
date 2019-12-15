export const getIsAuthenticated = ({auth}) => !!auth.token;
export const getProfile = ({auth, user}) => user.map[auth.profile.username] || auth.profile;
export const getLoginOrSignUpRequestIsPending = ({auth}) => auth.pending;
export const getMyTopSearches = state => getProfile(state).topSearches;
