import { Test, TestingModule } from '@nestjs/testing';
import { ProductLoaderService } from './product-loader.service';

describe('ProductLoaderService', () => {
  let provider: ProductLoaderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductLoaderService],
    }).compile();

    provider = module.get<ProductLoaderService>(ProductLoaderService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
