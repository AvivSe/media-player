import axios from "axios";

// defaults
const host = "http://localhost:8080";
const api = "/api";
const version = "";
const mediaServiceUrl = `${host}${version}${api}`;

class MediaSearchService {
  search(params) {
    return axios.get(`${mediaServiceUrl}/search`, { params });
  }

  async deleteOneOfMyTopSearches(keywords) {
    return axios.delete(`${mediaServiceUrl}/top`,{ params: { keywords }});
  }

}

const instance = new MediaSearchService();
export default Object.freeze(instance);
