import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { MongooseModule } from '@nestjs/mongoose';
import SearchEntrySchema from './search-entry.schema';

@Module({
  providers: [ReportService],
  imports: [MongooseModule.forFeature([{ name: 'SearchEntry', schema: SearchEntrySchema }])],
  exports: [ReportService],
})
export class ReportModule {}
