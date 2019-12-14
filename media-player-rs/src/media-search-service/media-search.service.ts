import axios from 'axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { MediaSearchResponseDto } from './MediaSearchResponseDto';
import { MediaSearchRequestDto } from './MediaSearchRequestDto';

export const Exceptions = {
  NOT_OK: 'NOT_OK',
  ENTITIES_UNDEFINED: 'ENTITIES_UNDEFINED',
  FORBIDDEN: 'FORBIDDEN',
};

@Injectable()
export class MediaSearchService {
  async search(params: MediaSearchRequestDto): Promise<MediaSearchResponseDto> {
    const { status, data } = await axios.get('https://itunes.apple.com/search', { params });

    if (status !== HttpStatus.OK) {
      throw new Error(Exceptions[status] || Exceptions.NOT_OK);
    }

    if (!data) {
      throw new Error(Exceptions.ENTITIES_UNDEFINED);
    }

    const response = data as MediaSearchResponseDto;
    response.lastRow = -1;
    if (data.resultCount < Number(params.limit)) {
      response.lastRow = data.resultCount + Number(params.offset);
    }

    return response;
  }
}
