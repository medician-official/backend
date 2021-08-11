import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductInfo } from './entities/search.entities';
import { ProductLoaderService } from './product-loader.service';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(
        private readonly searchService: SearchService,
        private readonly productLoaderService: ProductLoaderService
    ) {}

    @Get()
    search(searchKeyword: string): ProductInfo[] {
        return this.productLoaderService.getProductList();
    }

    @Get("/:index")
    getOne(@Param('index') index: number) {
        return this.productLoaderService.getProductByIndex(index);
    }

    @Post()
    create(@Body() productInfo: ProductInfo) {
        return this.productLoaderService.addProduct(productInfo);
    }

    @Delete("/:index")
    remove(@Param('index') index: number) {
        return this.productLoaderService.deleteProduct(index);
    }

    // update all of module
    // @Put()

    // update some of module
    // @Patch('/:id')
    // patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    //     return this.moviesService.update(movieId, updateData);
    // }
}
