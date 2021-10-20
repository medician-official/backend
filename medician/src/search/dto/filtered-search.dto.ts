import { IsNumber, IsOptional, IsString } from "class-validator";

// dto for file io (string array type)
// export class ProductFilterDto {
//     @IsOptional()
//     @IsString()
//     readonly name: string;

//     @IsOptional()
//     @IsString()
//     readonly brand: string;

//     @IsOptional()
//     @IsString({each: true})
//     readonly productType: string[];

//     @IsOptional()
//     @IsString({each: true})
//     readonly mainIngredients: string[];

//     @IsOptional()
//     @IsString({each: true})
//     readonly efficacy: string[];

//     @IsOptional()
//     @IsNumber()
//     readonly minPrice: number;

//     @IsOptional()
//     @IsNumber()
//     readonly maxPrice: number;
// }

export class ProductFilterDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly brand: string;

    @IsOptional()
    @IsString()
    readonly productType: string;

    @IsOptional()
    @IsString()
    readonly mainIngredients: string;

    @IsOptional()
    @IsString()
    readonly efficacy: string;

    @IsOptional()
    @IsNumber()
    readonly minPrice: number;

    @IsOptional()
    @IsNumber()
    readonly maxPrice: number;
}