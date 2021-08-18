import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductInfo } from './entities/search.entities';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(
        private readonly searchService: SearchService,
    ) {}

    @Get()
    getAll(): ProductInfo[] {
        return this.searchService.getProductList();
    }

    @Get("basic-search")
    search(@Query("keyword") searchKeyword: string) {
        return this.searchService.getProductByKeyword(searchKeyword);
    }

    @Get("/:index")
    getOne(@Param('index') index: number) {
        return this.searchService.getProductByIndex(index);
    }

    @Post()
    create(@Body() productInfo: ProductInfo) {
        return this.searchService.addProduct(productInfo);
    }

    @Delete("/:index")
    remove(@Param('index') index: number) {
        return this.searchService.deleteProduct(index);
    }
}
