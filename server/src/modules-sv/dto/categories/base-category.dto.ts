import {
    IsString,
    ArrayNotEmpty,
    IsArray,
    IsNumber,
    IsNotEmpty,
    IsPositive,
    IsInt
} from 'class-validator';

import {
    IsArrayValidationOptions,
    isNotEmptyValidationOptions,
    isNumberValidationOptions,
    isStringValidationOptions,
    isPositiveValidationOptions
} from '@shared/validation';

export class BaseCategoryDto {



    @IsInt(isStringValidationOptions())
    @IsNumber(isNumberValidationOptions)
    @IsPositive(isPositiveValidationOptions)
    readonly Id: number;

    @IsNotEmpty(isNotEmptyValidationOptions())
    @IsString(isStringValidationOptions())
    readonly description: string;


    @ArrayNotEmpty(isNotEmptyValidationOptions())
    @IsArray(IsArrayValidationOptions())
    readonly image: String;

}