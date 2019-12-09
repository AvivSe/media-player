import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const version = "";
const mediaServiceUrl = `${host}${version}${api}`;
const searchUrl = `${mediaServiceUrl}/search`;
const topUrl = `${mediaServiceUrl}/top`;

class MediaSearchService {
  search(params) {
    return axios.get(searchUrl, { params }).then(x => {
      console.log(x);
      return x;
    });
  }
}

const instance = new MediaSearchService();
export default Object.freeze(instance);
