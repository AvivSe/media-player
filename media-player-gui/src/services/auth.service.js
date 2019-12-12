import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const authServiceUrl = `${host}${api}`;

class AuthService {
  async login(data) {
    return axios.post(`${authServiceUrl}/login`, data);
  }
}

const instance = new AuthService();
export default Object.freeze(instance);
