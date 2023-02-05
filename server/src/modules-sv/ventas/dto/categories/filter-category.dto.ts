import { IsNumber, IsOptional, IsString } from "class-validator";
import {

    isNumberValidationOptions,
    isStringValidationOptions,

} from '@shared/validation';
export class FilterCategoryDto {
    
    @IsOptional()
    @IsString(isStringValidationOptions())
    readonly name: string;


    @IsOptional()
    @IsNumber(isNumberValidationOptions())
    readonly Id: number;

}