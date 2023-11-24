import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  nit: string;

  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsOptional()
  @MinLength(3)
  legalName?: string;

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
