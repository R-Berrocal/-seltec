import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateIncomeHistoryDto {
  @IsIn(['INGRESO', 'SALIDA'])
  @IsNotEmpty()
  operation: string;

  @IsString()
  @IsOptional()
  observation?: string;

  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  @IsUUID()
  employeeId: string;

  @IsNotEmpty()
  @IsUUID()
  locationId: string;
}
