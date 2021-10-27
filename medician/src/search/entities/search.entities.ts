import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// mainly used in filtered-search service
// export class ProductFilter {
//     name: string;
//     brand: string;
//     productType: string[];
//     mainIngredients: string[];
//     efficacy: string[];
//     minPrice: number;
//     maxPrice: number;
// }

// // search module make this and send to keyword-parser
// export class SearchPackage {
//     memberId: string;
//     memberNumber: number;
//     keywords: string;
//     detailedAttributes: ProductFilter;
// }

// product-loader makes list of this.
@Entity()
export class ProductInfo {
    @PrimaryGeneratedColumn("increment")
    index: number;
    @Column()
    name: string;
    @Column()
    brand: string;
    @Column()
    productType: string;
    @Column()
    mainIngredients: string;
    @Column()
    efficacy: string;
    @Column()
    url: string;
    @Column()
    lowestPrice: number;
    @Column()
    quantity: number;
    @Column()
    tags: string;
    // @Column()
    // image: ImageData;
}