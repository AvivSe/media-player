import { Injectable } from '@nestjs/common';

@Injectable()
export class RatingService {
  getTop(): string {
    return 'top';
  }
}
