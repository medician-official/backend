// mainly used in detail-search service
export class ProductFilter {
    brand: string;
    productType: string[];
    mainIngredients: string[];
    efficacy: string[];
    minPrice: number;
    maxPrice: number;
}

// search module make this and send to keyword-parser
export class SearchPackage {
    memberId: string;
    memberNumber: number;
    keywords: string;
    detailedAttributes: ProductFilter;
}

// product-loader makes list of this.
export class ProductInfo {
    name: string;
    brand: string;
    productType: string[];
    mainIngredients: string[];
    efficacy: string[];
    url: string;
    lowestPrice: number;
    quantity: number;
    tags: string[];
    image: ImageData;
}