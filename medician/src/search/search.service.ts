import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  hello(): string {
    return 'result from SearchService';
  }
}
