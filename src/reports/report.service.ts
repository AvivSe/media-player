import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SearchEntry } from './SearchEntry';
import { Model } from 'mongoose';
import { UserService } from '../users/users.service';

@Injectable()
export class ReportService {
  constructor(
    private readonly userService: UserService,
    @InjectModel('SearchEntry') private readonly searchEntry: Model<SearchEntry>,
  ) {}

  async report(username: string, keywords: string) {
    return this.searchEntry.findOne({ username, keywords }).then(async res => {
      if (!res) {
        res = new this.searchEntry({ username, keywords, count: 0 });
      }
      res.count += 1;
      res.save();
      return this.getUserTopSearches(username);
    });
  }

  async getUserTopSearches(username: string): Promise<Record<string, string>> {
    return this.searchEntry
      .find({ username }, null, {
        sort: { count: -1 },
        limit: 10,
      })
      .then(searchReports => {
        return searchReports.reduce((prev, curr) => {
          prev[curr.keywords] = curr.count;
          return prev;
        }, {});
      })
      .then(topSearches => this.userService.update(username, { topSearches }))
      .then(user => user.topSearches);
  }

  async deleteAllOfEachUserRecords(usernames: string[]): Promise<Record<string, string>> {
    return this.searchEntry.remove({ username: usernames });
  }

  async deleteOneOfMyTopSearches(username: string, keywords: string): Promise<Record<string, string>> {
    return this.searchEntry.deleteOne({ username, keywords }).then(() => this.getUserTopSearches(username));
  }
}
