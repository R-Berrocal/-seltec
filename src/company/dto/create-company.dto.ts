import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(9)
  @MinLength(9)
  nit: string;

  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsOptional()
  @MinLength(3)
  address?: string;

  @IsOptional()
  @MinLength(6)
  phone?: string;

  @IsOptional()
  @IsEmail()
  @MinLength(3)
  email?: string;

  @IsOptional()
  @MinLength(3)
  webSite?: string;
}
