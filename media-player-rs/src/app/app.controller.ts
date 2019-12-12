import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Query,
  Request,
  Post,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import MediaSearchService, { Response } from '../media-search/media-search.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

@Controller('api')
export class AppController {
  constructor(
    @Inject('MediaSearchService') private searchService: MediaSearchService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  healthCheck(): boolean {
    return true;
  }

  @Get('search')
  search(
    @Query('keywords') term: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ): Promise<Response> {
    if (!term) {
      throw new BadRequestException('Keywords params is required');
    }
    try {
      return this.searchService.search({ offset, limit, term });
    } catch (e) {
      throw new HttpException(
        { error: 'Something went wrong' },
        Number(HttpStatus[e]) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('top')
  getTop() {
    return 'top';
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
