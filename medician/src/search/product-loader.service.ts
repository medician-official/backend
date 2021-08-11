import { Injectable } from '@nestjs/common';
import { ProductInfo } from './entities/search.entities';

@Injectable()
export class ProductLoaderService {
    private productList: ProductInfo[] = [];

    getProductList(): ProductInfo[] {
        return this.productList;
    }

    getProductByIndex(index: number): ProductInfo {
        return this.productList.find(element => element.index === index);
    }

    addProduct(aProduct: ProductInfo) {
        this.productList.push({
            index: this.productList.length + 1,
            ...aProduct,
        });
    }

    deleteProduct(index: number) {
        this.productList = this.productList.filter(element => element.index !== index);
    }
}
