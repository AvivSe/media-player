export const OPEN_SNACKBAR = "OPEN_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";

export const openSnackbar = ({ message, duration = 2000}) => {
  return { type: OPEN_SNACKBAR, message  }
};

export const closeSnackbar = () => {
  return { type: CLOSE_SNACKBAR }
};
