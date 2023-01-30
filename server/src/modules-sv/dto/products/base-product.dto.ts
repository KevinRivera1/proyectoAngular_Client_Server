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

export class BaseProductDto {

  //@Allow()
  //readonly enrollment: EnrollmentEntity;

  //@Allow()
  //readonly projectPlan: ProjectPlanEntity;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly title: string;

  /*   @IsNotEmpty(isNotEmptyValidationOptions())
    @IsBoolean(isBooleanValidationOptions())
    readonly approved: boolean; */

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsNumber(isNumberValidationOptions)
  @IsPositive(isPositiveValidationOptions)
  readonly price: number;

  @IsNotEmpty(isNotEmptyValidationOptions())
  @IsString(isStringValidationOptions())
  readonly description: string;

  @IsInt(isStringValidationOptions())
  @IsNumber(isNumberValidationOptions)
  @IsPositive(isPositiveValidationOptions)
  readonly categoryId: number;

  @ArrayNotEmpty(isNotEmptyValidationOptions())
  @IsArray(IsArrayValidationOptions())
  readonly images: String[]

}