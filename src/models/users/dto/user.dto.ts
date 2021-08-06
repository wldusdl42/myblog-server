import { IsString } from "class-validator";

export class UserDto {
    @IsString()
    readonly id: string;
    @IsString()
    readonly token: string;
    @IsString()
    readonly passwd: string;
}