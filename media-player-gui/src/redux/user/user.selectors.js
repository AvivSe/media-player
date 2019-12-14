export const getUserList = ({user}) => user.rows;
export const getIsEmptyUserList = ({user}) => user.rows && Array.isArray(user.rows) && user.rows.length === 0;
