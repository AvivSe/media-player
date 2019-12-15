import axios from "axios";
const authServiceUrl = process.env.REACT_APP_API_URL;
export const axiosMessageToStatusCode = message => message && typeof message === "string"  && message.length > 3 && Number(message.slice(message.length - 3, message.length));

class AuthService {
  async login(username, password) {
    try {
        const result = await axios.post(`${authServiceUrl}/login`, { username, password });
      axios.defaults.headers.common["Authorization"] = `Bearer ${result.data.token}`;
      return result;
    } catch (e) {
      axios.defaults.headers.common["Authorization"] = null;
      e.statusCode = axiosMessageToStatusCode(e.message);
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
      e.statusCode = axiosMessageToStatusCode(e.message);
      throw e;
    }
  }

  getPersistToken() {
    return localStorage.getItem("authSnapshot");
  }

}

const instance = new AuthService();
export default Object.freeze(instance);
