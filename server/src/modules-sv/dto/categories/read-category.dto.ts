import { Exclude, Expose } from "class-transformer";
@Exclude()
export class ReadCategoryDto {

    @Expose()
    readonly name;

    @Expose()
    readonly description;

    @Expose()
    readonly Id;

    @Expose()
    readonly image;

}