import { IsNumber, IsOptional, IsString } from "class-validator";

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