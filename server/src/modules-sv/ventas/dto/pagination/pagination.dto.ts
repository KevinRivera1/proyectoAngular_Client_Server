import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @Min(0)
    page: number

    @IsOptional()
    @Min(0)
    search: string

    static gettOffset(limit: number, page: number): number {
        return page * limit;
    }
}