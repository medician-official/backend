import { Module } from '@nestjs/common';
import { KeywordParserService } from './keyword-parser/keyword-parser.service';
import { KeywordParser } from './keyword-parser';

@Module({
  providers: [KeywordParserService, KeywordParser]
})
export class KeywordParserModule {}
