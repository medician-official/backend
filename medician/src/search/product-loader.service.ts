import { Injectable, ValidationPipe } from '@nestjs/common';
import { ProductInfo } from './entities/search.entities';
import * as fs from 'fs'
import { classToClass } from 'class-transformer';

@Injectable()
export class ProductLoaderService {
    private productList: ProductInfo[] = [];
    private tempProduct: ProductInfo;
    private fileDir: string = 'temp-database/products/';

    constructor() {
        var tempFileList: any;
        // read file list
        tempFileList = fs.readdirSync(this.fileDir);
        // read all json files
        tempFileList.forEach(element => {
            if (RegExp('\.json$', 'i').test(element)) {
                this.tempProduct = JSON.parse(fs.readFileSync(this.fileDir + element, 'utf8'));
                this.addProduct(this.tempProduct);
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

    deleteProduct(index: number) {
        this.productList = this.productList.filter(element => element.index !== index);
    }
}
