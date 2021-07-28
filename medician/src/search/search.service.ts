import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  search(searchKeyword: string): string {
    return `${searchKeyword} result from search function`;
  }
}
