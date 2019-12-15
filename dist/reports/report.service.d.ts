import { SearchEntry } from './SearchEntry';
import { Model } from 'mongoose';
import { UserService } from '../users/users.service';
export declare class ReportService {
    private readonly userService;
    private readonly searchEntry;
    constructor(userService: UserService, searchEntry: Model<SearchEntry>);
    report(username: string, keywords: string): Promise<any>;
    getUserTopSearches(username: string): Promise<Record<string, string>>;
    deleteAllOfEachUserRecords(usernames: string[]): Promise<Record<string, string>>;
    deleteOneOfMyTopSearches(username: string, keywords: string): Promise<Record<string, string>>;
}
