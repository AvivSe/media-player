import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const authServiceUrl = `${host}${api}`;

class AuthService {
  async login(username, password) {
    try {
        const result = await axios.post(`${authServiceUrl}/login`, { username, password });
      axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;
      return result;
    } catch (e) {
      axios.defaults.headers.common["Authorization"] = null;
      throw e;
    }
  }

  async signUp(username, password, retypePassword, firstName, lastName) {
    try {
      const result = await axios.post(`${authServiceUrl}/signup`, { username, password, retypePassword, firstName, lastName });
      axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;
      return result;
    } catch (e) {
      axios.defaults.headers.common["Authorization"] = null;
      throw e;
    }
  }

  getPersistToken() {
    return localStorage.getItem("authSnapshot");
  }
}

const instance = new AuthService();
export default Object.freeze(instance);
