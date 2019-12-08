import MediaSearchService, { Request, Response } from '../interfaces/media-search.service';

export class ItunesMediaSearchService implements MediaSearchService {
  search(request: Request): Response {
    return { resultCount: 50, results: []};
  }
}
