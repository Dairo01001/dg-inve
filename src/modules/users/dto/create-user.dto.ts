import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  username: string;

  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @ApiProperty()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  roleId: number;
}
