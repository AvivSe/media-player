import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MediaSearchService } from '../media-search-service/media-search.service';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { ReportModule } from '../reports/report.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ReportModule,
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'dist', 'client'),
      renderPath: '*',
    }),
  ],
  controllers: [AppController],
  providers: [MediaSearchService],
})
export class AppModule {}
