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
  search(@Query('keywords') term: string, @Query() page: number, @Query('limit') limit: number): Promise<Response> {
    if (!term) {
      throw new HttpException('Keywords params is required', HttpStatus.BAD_REQUEST);
    }
    return this.searchService.search({ page, limit, term });
  }

  @Get('top')
  getTop() {
    return 'top';
  }
}
