export class Request {
  term: string;
  limit: number;
  offset: number;
}

// tslint:disable-next-line:max-classes-per-file
export class Response {
  resultCount: number;
  lastRow: number;
  results: any[];
}

export default interface MediaSearchService {
  search(request: Request): Promise<Response>;
}
