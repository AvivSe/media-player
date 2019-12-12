import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const version = "";
const authServiceUrl = `${host}${version}${api}`;

export const exceptionToMessage = {
  404: 'Something went wrong (404)',
  401: 'Session expired (401)',
  403: 'Slow down',
};
class AuthService {
  authenticate(data) {
    return axios.post(authServiceUrl, data);
  }
}

const instance = new AuthService();
export default Object.freeze(instance);
