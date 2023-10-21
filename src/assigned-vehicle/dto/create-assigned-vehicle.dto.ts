import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAssignedVehicleDto {
  @IsString()
  @IsOptional()
  operationType?: string;

  @IsInt()
  @IsOptional()
  daysService?: number;

  @IsString()
  @IsOptional()
  observations?: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  vehicle: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  employee: string;
}
