import { AuthService } from '../auth/auth.service';
import { SignInDto } from '../auth/SignInDto';
import { SignUpDto } from '../auth/SignUpDto';
import { MediaSearchResponseDto } from '../media-search-service/MediaSearchResponseDto';
import { MediaSearchService } from '../media-search-service/media-search.service';
import { ReportService } from '../reports/report.service';
import { DeleteTopSearchRequest } from '../media-search-service/DeleteTopSearchRequest';
export declare class AppController {
    private readonly mediaSearchService;
    private readonly authService;
    private readonly reportService;
    constructor(mediaSearchService: MediaSearchService, authService: AuthService, reportService: ReportService);
    deleteOneOfMyTopSearches({ keywords }: DeleteTopSearchRequest, request: any): Promise<Record<string, string>>;
    getMyTopSearches(request: any): Promise<Record<string, string>>;
    search(term: string, offset: number, limit: number, request: any): Promise<MediaSearchResponseDto>;
    login(signInDto: SignInDto): Promise<{
        token: string;
        profile: import("../users/User").User;
    }>;
    signUp(signUpDto: SignUpDto): Promise<{
        token: string;
        profile: import("../users/User").User;
        _id: string;
        username: string;
        password: string;
        lastLogin: Date;
        firstName: string;
        lastName: string;
        topSearches: Map<string, number>;
    }>;
    getProfile(req: any): any;
    healthCheck(): boolean;
}
