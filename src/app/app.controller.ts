import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../auth/auth.service';

import { SignInDto } from '../auth/SignInDto';
import { SignUpDto } from '../auth/SignUpDto';
import { MediaSearchResponseDto } from '../media-search-service/MediaSearchResponseDto';
import { MediaSearchService } from '../media-search-service/media-search.service';
import { ReportService } from '../reports/report.service';
import { IsNotEmpty } from 'class-validator';
import { DeleteTopSearchRequest } from '../media-search-service/DeleteTopSearchRequest';

@Controller('api')
export class AppController {
  constructor(
    private readonly mediaSearchService: MediaSearchService,
    private readonly authService: AuthService,
    private readonly reportService: ReportService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Delete('top')
  deleteOneOfMyTopSearches(@Query() { keywords }: DeleteTopSearchRequest, @Req() request): Promise<Record<string, string>> {
    return this.reportService.deleteOneOfMyTopSearches(request.user.username, keywords);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('top')
  getMyTopSearches(@Req() request): Promise<Record<string, string>> {
    return this.reportService.getUserTopSearches(request.user.username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  search(
    @Query('keywords') term: string,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
    @Req() request,
  ): Promise<MediaSearchResponseDto> {
    if (!term) {
      throw new BadRequestException('Keywords params is required');
    }
    this.reportService
      .report(request.user.username, term).catch(e => console.warn(e));
    try {
      return this.mediaSearchService.search({ offset, limit, term });
    } catch (e) {
      throw new HttpException(
        { error: 'Something went wrong' },
        Number(HttpStatus[e]) || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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
    if (signUpDto.retypePassword !== signUpDto.password) {
      throw new BadRequestException('passwords do not math');
    }
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get()
  healthCheck(): boolean {
    return true;
  }
}
