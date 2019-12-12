export const LOGIN = "LOGIN";

export const login = auth => {
  return { type: LOGIN, ...auth }
};
