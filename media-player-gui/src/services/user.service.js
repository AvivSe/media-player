import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const userServiceUrl = `${host}${api}/user`;

class UserService {
  async find(params) {
    return axios.get(userServiceUrl, { params });
  }

  async update(username, payload) {
    return axios.put(`${userServiceUrl}/${username}`, payload);
  }

  async deleteOne(username) {
    return axios.delete(`${userServiceUrl}/${username}`);
  }

  async delete(usernameList) {
    return axios.delete(userServiceUrl, { data: usernameList});
  }

  async create(user) {
    return axios.put(userServiceUrl, user);
  }

}

const instance = new UserService();
export default Object.freeze(instance);
