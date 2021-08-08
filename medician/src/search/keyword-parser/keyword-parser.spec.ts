import { Test, TestingModule } from '@nestjs/testing';
import { KeywordParser } from './keyword-parser';

describe('KeywordParser', () => {
  let provider: KeywordParser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeywordParser],
    }).compile();

    provider = module.get<KeywordParser>(KeywordParser);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
