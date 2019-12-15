import { exceptionToMessage } from "../../services/http.exception.descriptions";

export const OPEN_SNACKBAR = "OPEN_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";

export const openSnackbar = ({ statusCode, message, duration = 2000}) => {
  return { type: OPEN_SNACKBAR, message: !!statusCode ? exceptionToMessage[statusCode] : message  }
};

export const closeSnackbar = () => {
  return { type: CLOSE_SNACKBAR }
};
