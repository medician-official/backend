import { IsNumber, IsOptional, IsString } from "class-validator";

export class ProductInfoDto {
    @IsOptional()
    @IsNumber()
    index: number;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    brand: string;

    @IsOptional()
    @IsString()
    productType: string;

    @IsOptional()
    @IsString()
    mainIngredients: string;

    @IsOptional()
    @IsString()
    efficacy: string;

    @IsOptional()
    @IsString()
    url: string;

    @IsOptional()
    @IsNumber()
    lowestPrice: number;

    @IsOptional()
    @IsNumber()
    quantity: number;

    @IsOptional()
    @IsString()
    tags: string;
}
