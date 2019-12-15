import { MediaSearchResponseDto } from './MediaSearchResponseDto';
import { MediaSearchRequestDto } from './MediaSearchRequestDto';
export declare const Exceptions: {
    NOT_OK: string;
    ENTITIES_UNDEFINED: string;
    FORBIDDEN: string;
};
export declare class MediaSearchService {
    search(params: MediaSearchRequestDto): Promise<MediaSearchResponseDto>;
}
