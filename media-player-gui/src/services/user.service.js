import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const userServiceUrl = `${host}${api}/user`;

class UserService {
  async find(params) {
    return axios.get(userServiceUrl, { params });
  }
}

const instance = new UserService();
export default Object.freeze(instance);
