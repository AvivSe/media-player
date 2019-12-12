import { Request, Response } from './media-search.service';
import axios from 'axios';
import { HttpStatus, Injectable } from '@nestjs/common';

export const Exceptions = {
  NOT_OK: 'NOT_OK',
  ENTITIES_UNDEFINED: 'ENTITIES_UNDEFINED',
  FORBIDDEN: 'FORBIDDEN',
};

@Injectable()
export class ItunesMediaSearchService {
  async search(params: Request): Promise<Response> {
    const { status, data } = await axios.get('https://itunes.apple.com/search', { params });

    if (status !== HttpStatus.OK) {
      throw new Error(Exceptions[status] || Exceptions.NOT_OK);
    }

    if (!data) {
      throw new Error(Exceptions.ENTITIES_UNDEFINED);
    }

    const response = data as Response;
    response.lastRow = -1;
    if (data.resultCount < Number(params.limit)) {
      response.lastRow = data.resultCount + Number(params.offset);
    }
    // response.elasticTotal = Number(params.offset) + Math.min(data.resultCount, params.limit);
    return response;
  }
}
