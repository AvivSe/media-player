import { IsNotEmpty } from 'class-validator';

export class DeleteTopSearchRequest {
  @IsNotEmpty()
  keywords: string;
}
