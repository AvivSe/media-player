import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SearchEntry } from './SearchEntry';
import { Model } from 'mongoose';

@Injectable()
export class ReportService {
  constructor(@InjectModel('SearchEntry') private readonly searchEntry: Model<SearchEntry>) {}

  async report(username: string, keywords: string) {
    return this.searchEntry.findOne({ username, keywords }).then(async res => {
      if (!res) {
        res = new this.searchEntry({ username, keywords, count: 0 });
      }
      res.count += 1;
      res.save();
    });
  }

  async getUserTopSearches(username: string, limit: number): Promise<Record<string, string>> {
    return this.searchEntry.find({ username }, null, {
      sort: { count: 1 }, limit: Number(limit),
    }).then(searchReports => {
      return searchReports.reduce((prev, curr) => {
        prev[curr.keywords] = curr.count;
        return prev;
      }, {});
    });
  }
}
