import { Injectable } from '@nestjs/common';
import { ProductInfo } from './entities/search.entities';
import * as fs from 'fs'
import { ProductFilterDto } from './dto/filtered-search.dto';

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
                element.productType.forEach(element2 => {
                    filter.productType.forEach(element3 => {
                        if (RegExp(element3, 'i').test(element2)) {
                            searchResult.push(element);
                            console.log("check_prot");
                            return;
                        }
                    })
                })
            }
            // main Ingredient
            if (filter.mainIngredients) {
                element.mainIngredients.forEach(element2 => {
                    filter.mainIngredients.forEach(element3 => {
                        if (RegExp(element3, 'i').test(element2)) {
                            searchResult.push(element);
                            console.log("check_ing");
                            return;
                        }
                    })
                })
            }
            // efficacy
            if (filter.efficacy) {
                element.efficacy.forEach(element2 => {
                    filter.efficacy.forEach(element3 => {
                        if (RegExp(element3, 'i').test(element2)) {
                            searchResult.push(element);
                            console.log("check_eff");
                            return;
                        }
                    })
                })
            }
        })
        return searchResult;
    }
}
