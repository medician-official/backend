import { IsNumber, IsOptional, IsString } from "class-validator";

export class ProductFilterDto {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsString()
    readonly brand: string;

    @IsOptional()
    @IsString({each: true})
    readonly productType: string[];

    @IsOptional()
    @IsString({each: true})
    readonly mainIngredients: string[];

    @IsOptional()
    @IsString({each: true})
    readonly efficacy: string[];

    @IsOptional()
    @IsNumber()
    readonly minPrice: number;

    @IsOptional()
    @IsNumber()
    readonly maxPrice: number;
}