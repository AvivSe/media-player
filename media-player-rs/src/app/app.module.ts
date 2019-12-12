import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItunesMediaSearchService } from '../media-search/itunes.media-search.service';
import { RatingService } from '../rating.service';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';

export const mediaSearchProvider = { provide: 'MediaSearchService', useClass: ItunesMediaSearchService };

@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot('mongodb://localhost/media-search')],
  controllers: [AppController],
  providers: [mediaSearchProvider, RatingService],
})
export class AppModule {
}
