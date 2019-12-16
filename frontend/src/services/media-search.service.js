import axios from "axios";

const mediaServiceUrl = process.env.REACT_APP_API_URL;

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
