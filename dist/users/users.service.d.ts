import { Model } from 'mongoose';
import { User } from './User';
import { CreateUserDto } from './CreateUserDto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(username: string): Promise<any>;
    findOneAllowPassword(username: string): Promise<any>;
    find(): Promise<User[]>;
    count(): Promise<User[]>;
    update(username: string, updateUserDto: any): Promise<User>;
    updateMany(usernames: string[], updateUserDto: any): Promise<User>;
    deleteOne(username: any): Promise<any>;
    delete(userNames: string[]): Promise<any>;
}
