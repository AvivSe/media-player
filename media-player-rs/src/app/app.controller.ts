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
  BadRequestException, HttpCode, Body, Res,
} from '@nestjs/common';
import MediaSearchService, { Response as MediaSearchResponse } from '../media-search/media-search.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';
import { SignInDto } from '../dto/SignInDto';
import { SignUpDto } from '../dto/SignUpDto';

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
  ): Promise<MediaSearchResponse> {
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
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: SignInDto) {
    return this.authService.login(signInDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    if (signUpDto._password !== signUpDto.password) {
      throw new BadRequestException('passwords do not math');
    }
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
