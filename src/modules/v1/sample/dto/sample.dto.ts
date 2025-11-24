import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSample {
    @ApiProperty({ default: "FREE_TRIAL" })
    @IsNotEmpty()
    title: string;
}