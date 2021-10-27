import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductFilterDto } from './dto/filtered-search.dto';
import { ProductInfoDto } from './dto/product-info.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(
        private readonly searchService: SearchService,
    ) {}

    @Get()
    getAll() {
        console.log("getAll");
        return this.searchService.getProductList();
    }

    // localhost:3003/search/basic-search?keyword="asdf"
    @Get("basic-search")
    search(@Query("keyword") searchKeyword: string) {
        return this.searchService.getProductByKeyword(searchKeyword);
    }

    @Post()
    create(@Body() productInfo: ProductInfoDto) {
        return this.searchService.addProduct(productInfo);
    }

    @Post("filtered-search")
    filteredSearch(@Body() filter: ProductFilterDto) {
        return this.searchService.getProductByFilter(filter);
    }
}
