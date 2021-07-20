import { IsString } from "class-validator";

export class LoginDto {
    @IsString()
    readonly user_id: string;
    @IsString()
    readonly user_password: string;
}