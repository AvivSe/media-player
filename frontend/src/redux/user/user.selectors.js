export const getUserList = ({user}) => user.ids.map(id => user.map[id]);
export const getIsEmptyUserList = ({user}) => user.ids.length === 0;
export const getIsUserServicePending = ({user}) => user.pending;
