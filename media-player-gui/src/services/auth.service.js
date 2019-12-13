import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const authServiceUrl = `${host}${api}`;

class AuthService {
  async login(username, password) {
    return axios.post(`${authServiceUrl}/login`, { username, password });
  }
}

const instance = new AuthService();
export default Object.freeze(instance);
