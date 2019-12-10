import { Controller, Get, HttpException, HttpStatus, Inject, Query } from '@nestjs/common';
import MediaSearchService, { Response } from './interfaces/media-search.service';

@Controller('api')
export class AppController {

  constructor(@Inject('MediaSearchService') private searchService: MediaSearchService) {}

  @Get()
  healthCheck(): boolean {
    return true;
  }

  @Get('search')
  search(@Query('keywords') term: string, @Query('offset') offset: number, @Query('limit') limit: number): Promise<Response> {
    if (!term) {
      throw new HttpException('Keywords params is required', HttpStatus.BAD_REQUEST);
    }
    try {
      return this.searchService.search({ offset, limit, term });
    } catch (e) {
      throw new HttpException({ error: 'Something went wrong' }, Number(HttpStatus[e]) || HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('top')
  getTop() {
    return 'top';
  }
}
