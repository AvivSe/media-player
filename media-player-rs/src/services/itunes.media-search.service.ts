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
    return data as Response;
  }
}
