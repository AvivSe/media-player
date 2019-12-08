export interface Request {
  keywords: string;
  limit: number;
  page: number;
}

export interface Response {
  resultCount: number;
  results: any[];
}

export default interface MediaSearchService {
  search(request: Request): Response;
}
