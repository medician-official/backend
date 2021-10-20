import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ProductFilterDto } from './dto/filtered-search.dto';
import { ProductInfoDto } from './dto/product-info.dto';
import { ProductInfo } from './entities/search.entities';
// import { SearchService } from './search.service';
import { SearchService } from './search.service_typeorm';

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
        // for debug
        // console.log("basic search ", searchKeyword);
        return this.searchService.getProductByKeyword(searchKeyword);
    }

    // @Get("/:index")
    // getOne(@Param('index') index: number) {
    //     return this.searchService.getProductByIndex(index);
    // }

    @Post()
    create(@Body() productInfo: ProductInfoDto) {
        // for debug
        console.log("basic create", productInfo);
        return this.searchService.addProduct(productInfo);
    }

    // @Delete("/:index")
    // remove(@Param('index') index: number) {
    //     return this.searchService.deleteProduct(index);
    // }

    @Post("filtered-search")
    filteredSearch(@Body() filter: ProductFilterDto) {
        // for debug
        console.log("filtered search", filter);
        return this.searchService.getProductByFilter(filter);
    }
}
