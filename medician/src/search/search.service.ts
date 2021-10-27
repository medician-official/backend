import { Injectable } from '@nestjs/common';
import { ProductInfo } from './entities/search.entities';
import * as fs from 'fs'
import { ProductFilterDto } from './dto/filtered-search.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService {
    private productList: ProductInfo[] = [];
    private tempProduct: ProductInfo;

    constructor(
        @InjectRepository(ProductInfo)
        private productRepo: Repository<ProductInfo>
    ) {}

    async addProduct(aProduct: ProductInfo) {
        await this.productRepo.save(aProduct);
    }

    async getProductList(): Promise<ProductInfo[]> {
        var searchResult = await this.productRepo.createQueryBuilder()
                        .getMany();
        return searchResult;
    }

    // getProductByIndex(index: number): ProductInfo {
    //     return this.productList.find(element => element.index === index);
    // }

    async getProductByKeyword(searchKeyword: string): Promise<ProductInfo[]> {
        var searchResult = await this.productRepo.createQueryBuilder()
                        .where(`ProductInfo.name like '%${searchKeyword}%'`)
                        .orWhere(`ProductInfo.brand like '%${searchKeyword}%'`)
                        .orWhere(`ProductInfo.productType like '%${searchKeyword}%'`)
                        .orWhere(`ProductInfo.mainIngredients like '%${searchKeyword}%'`)
                        .orWhere(`ProductInfo.efficacy like '%${searchKeyword}%'`)
                        .orWhere(`ProductInfo.tags like '%${searchKeyword}%'`)
                        .getMany();
        console.log(searchResult);
        return searchResult;
    }

    // deleteProduct(index: number) {
    //     this.productList = this.productList.filter(element => element.index !== index);
    // }

    getProductByFilter(filter: ProductFilterDto) {
        var searchResult: ProductInfo[] = [];
        this.productList.forEach(element => {
            // name
            if (filter.name) {
                if (RegExp(filter.name, 'i').test(element.name)) {
                    searchResult.push(element);
                    console.log(filter);
                    return;
                }
            }
            // brand
            if (filter.brand) {
                if (RegExp(filter.brand, 'i').test(element.brand)) {
                    searchResult.push(element);
                    console.log("check_brand");
                    return;
                }
            }
            // productType
            if (filter.productType) {
                if (RegExp(filter.productType, 'i').test(element.productType)) {
                    searchResult.push(element);
                    console.log("check_productType");
                    return;
                }
            }
            // main Ingredient
            if (filter.mainIngredients) {
                if (RegExp(filter.mainIngredients, 'i').test(element.mainIngredients)) {
                    searchResult.push(element);
                    console.log("check_main_ingredient");
                    return;
                }
            }
            // efficacy
            if (filter.efficacy) {
                if (RegExp(filter.efficacy, 'i').test(element.efficacy)) {
                    searchResult.push(element);
                    console.log("check_efficacy");
                    return;
                }
            }
        })
        return searchResult;
    }
}
