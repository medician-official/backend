import { Module } from '@nestjs/common';
import { ProductLoaderService } from './product-loader/product-loader.service';
import { ProductLoader } from './product-loader';

@Module({
  providers: [ProductLoaderService, ProductLoader]
})
export class ProductLoaderModule {}
