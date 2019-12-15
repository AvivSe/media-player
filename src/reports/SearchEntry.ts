import { Document } from 'mongoose';

export interface SearchEntry extends Document {
  readonly username: string;
  readonly keywords: string;
  readonly count: number;
}
