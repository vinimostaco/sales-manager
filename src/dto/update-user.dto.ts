import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateUserDTO {

    @IsOptional()
    @MaxLength(255)
    @MinLength(2)
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @MaxLength(12)
    @MinLength(6)
    @IsString()
    password?: string;
}
