import { IsNotEmpty } from 'class-validator';

export class Request {

  @IsNotEmpty()
  term: string;

  limit: number;

  page: number;
}

export interface Response {
  resultCount: number;
  results: any[];
}

export default interface MediaSearchService {
  search(request: Request): Promise<Response>;
}
