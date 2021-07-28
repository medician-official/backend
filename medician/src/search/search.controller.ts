import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}
  @Get()
  getHello(): string {
    return this.searchService.hello();
  }
  @Get('/beom')
  bbb(@Query('age') age: number): string {
    return `범존잘 ${age}`;
  }
  @Get('/beom')
  asdfasdf(): string {
    return `범존잘`;
  }
}
