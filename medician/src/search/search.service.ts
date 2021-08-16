import { Injectable } from '@nestjs/common';
import { ProductInfo } from './entities/search.entities';
import * as fs from 'fs'

@Injectable()
export class SearchService {
    private productList: ProductInfo[] = [];
    private tempProduct: ProductInfo;
    private fileDir: string = 'temp-database/products/';

    constructor() {
        // read file list and read all json files
        fs.readdirSync(this.fileDir).forEach(element => {
            if (RegExp('\.json$', 'i').test(element)) {
                this.addProduct(JSON.parse(fs.readFileSync(this.fileDir + element, 'utf8')));
            }
        });
    }

    addProduct(aProduct: ProductInfo) {
        this.productList.push({
            index: this.productList.length + 1,
            ...aProduct,
        });
    }

    getProductList(): ProductInfo[] {
        return this.productList;
    }

    getProductByIndex(index: number): ProductInfo {
        return this.productList.find(element => element.index === index);
    }

    getProductByKeyword(searchKeyword: string): ProductInfo[] {
        var searchResult: ProductInfo[] = [];
        this.productList.forEach(element => {
            // name
            if (RegExp(searchKeyword, 'i').test(element.name)) {
                searchResult.push(element);
                return;
            }
            // brand
            if (RegExp(searchKeyword, 'i').test(element.brand)) {
                searchResult.push(element);
                return;
            }
            // productType
            element.productType.forEach(element2 => {
                if (RegExp(searchKeyword, 'i').test(element2)) {
                    searchResult.push(element);
                    return;
                }
            })
            // main Ingredient
            element.mainIngredients.forEach(element2 => {
                if (RegExp(searchKeyword, 'i').test(element2)) {
                    searchResult.push(element);
                    return;
                }
            })
            // efficacy
            element.efficacy.forEach(element2 => {
                if (RegExp(searchKeyword, 'i').test(element2)) {
                    searchResult.push(element);
                    return;
                }
            })
            // tags
            element.tags.forEach(element2 => {
                if (RegExp(searchKeyword, 'i').test(element2)) {
                    searchResult.push(element);
                    return;
                }
            })
        })
        return searchResult;
    }

    deleteProduct(index: number) {
        this.productList = this.productList.filter(element => element.index !== index);
    }
}
