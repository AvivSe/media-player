import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const version = "";
const authServiceUrl = `${host}${version}${api}`;

export const exceptionToMessage = {
  'Request failed with status code 404':'Something went wrong'
};
class AuthService {
  authenticate(data) {
    return axios.post(authServiceUrl, data);
  }
}

const instance = new AuthService();
export default Object.freeze(instance);
