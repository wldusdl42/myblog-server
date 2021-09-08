import { IsString, IsEmail } from "class-validator";
import { Exclude } from 'class-transformer';

export class UserDto {
    @IsEmail()
    readonly id: string;
    @IsString()
    readonly token: string;
    @IsString()
    readonly passwd: string;
    @IsString()
    readonly name: string;
    @Exclude()
    readonly currentHashRefreshToken?: string;
}