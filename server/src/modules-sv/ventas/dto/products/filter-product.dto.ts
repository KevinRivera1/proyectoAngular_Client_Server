import { IsOptional, IsString } from 'class-validator';
import { PaginationDto } from '../pagination/pagination.dto';

import {
    isStringValidationOptions,
} from '@shared/validation';

export class FilterProductDto extends PaginationDto {
    @IsOptional()
    @IsString(isStringValidationOptions())
    readonly title: string;


    @IsOptional()
    @IsString(isStringValidationOptions())
    readonly categoryId: number;


}


