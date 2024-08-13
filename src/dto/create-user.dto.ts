import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO{

    @MaxLength(255)
    @MinLength(2)
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @MaxLength(12)
    @MinLength(6)
    @IsString()
    @IsNotEmpty()
    password!: string;
}