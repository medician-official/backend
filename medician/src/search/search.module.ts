import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { ProductLoaderService } from './product-loader.service';
import { KeywordParserService } from './keyword-parser.service';

@Module({
  controllers: [SearchController],
  providers: [SearchService, ProductLoaderService, KeywordParserService],
})
export class SearchModule {}
