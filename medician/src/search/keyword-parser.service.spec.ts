import { Test, TestingModule } from '@nestjs/testing';
import { KeywordParserService } from './keyword-parser.service';

describe('KeywordParserService', () => {
  let provider: KeywordParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeywordParserService],
    }).compile();

    provider = module.get<KeywordParserService>(KeywordParserService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
