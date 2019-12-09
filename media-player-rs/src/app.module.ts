import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItunesMediaSearchService } from './services/itunes.media-search.service';
import { RatingService } from './services/rating.service';

export const mediaSearchProvider = { provide: 'MediaSearchService', useClass: ItunesMediaSearchService };

@Module({
  controllers: [AppController],
  providers: [mediaSearchProvider, RatingService],
})
export class AppModule {
}
