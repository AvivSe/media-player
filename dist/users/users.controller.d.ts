import { UserService } from './users.service';
import { CreateUserDto } from './CreateUserDto';
import { UpdateUserDto } from './UpdateUserDto';
import { ChangeUserParamDto } from './ChangeUserParamDto';
import { ReportService } from '../reports/report.service';
export declare class UsersController {
    private readonly userService;
    private readonly reportService;
    constructor(userService: UserService, reportService: ReportService);
    handleNoSuchEntity(res: any): any;
    put({ username }: ChangeUserParamDto, updateUserDto: UpdateUserDto): Promise<any>;
    findOne({ username }: ChangeUserParamDto): Promise<any>;
    find(): Promise<{
        lastRow: import("./User").User[];
        rows: import("./User").User[];
    }>;
    create(createUserDto: CreateUserDto): Promise<import("./User").User>;
    deleteOne({ username }: ChangeUserParamDto): Promise<any>;
    delete(userNames: string[]): Promise<any>;
    deleteReportsAllowExceptions(usernames: string[]): void;
}
