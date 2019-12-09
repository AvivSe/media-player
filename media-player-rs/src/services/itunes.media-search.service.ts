import { Request, Response } from '../interfaces/media-search.service';
import axios from 'axios';
import { HttpStatus, Injectable } from '@nestjs/common';

export const Exceptions = {
  NOT_OK: 'NOT_OK',
  ENTITIES_UNDEFINED: 'ENTITIES_UNDEFINED',
};

@Injectable()
export class ItunesMediaSearchService {
  async search(params: Request): Promise<Response> {
    const { status, data } = await axios.get('https://itunes.apple.com/search', { params });
    if (status !== HttpStatus.OK) {
      throw new Error(Exceptions.NOT_OK);
    }
    if (!data) {
      throw new Error(Exceptions.ENTITIES_UNDEFINED);
    }
    const potentialLastRow = params.offset + params.limit;
    // todo: calc last page
    //data.lastRow = data.resultCount < potentialLastRow ? potentialLastRow : 1000;
    data.lastRow = 1000;
    return data as Response;
  }
}
