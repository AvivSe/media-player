import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MediaSearchService } from '../media-search-service/media-search.service';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { ReportModule } from '../reports/report.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ReportModule,
    MongooseModule.forRoot('mongodb://localhost/media-search-service', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [MediaSearchService],
})
export class AppModule {}
