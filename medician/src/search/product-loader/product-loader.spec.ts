import { Test, TestingModule } from '@nestjs/testing';
import { ProductLoader } from './product-loader';

describe('ProductLoader', () => {
  let provider: ProductLoader;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductLoader],
    }).compile();

    provider = module.get<ProductLoader>(ProductLoader);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
