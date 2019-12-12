import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const version = "";
const authServiceUrl = `${host}${version}${api}`;

class AuthService {
  authenticate(data) {
    return axios.post(authServiceUrl, data);
  }
}

const instance = new AuthService();
export default Object.freeze(instance);
