import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { KeywordParserModule } from './keyword-parser/keyword-parser.module';
import { ProductLoaderModule } from './product-loader/product-loader.module';

@Module({
  controllers: [SearchController],
  providers: [SearchService],
  imports: [KeywordParserModule, ProductLoaderModule],
})
export class SearchModule {}
