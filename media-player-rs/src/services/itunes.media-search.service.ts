import MediaSearchService, { Request, Response } from '../interfaces/media-search.service';
import axios from 'axios';

export class ItunesMediaSearchService implements MediaSearchService {
  search(request: Request): Promise<Response> {
    return axios.get('https://itunes.apple.com/search', {
      params: request,
    });
  }
}
