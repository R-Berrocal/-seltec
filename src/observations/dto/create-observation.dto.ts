import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateObservationDto {
  @IsString()
  @IsOptional()
  observation?: string;

  @IsDateString()
  @IsNotEmpty()
  initDate: string;

  @IsDateString()
  @IsNotEmpty()
  endDate: string;

  @IsUUID()
  @IsNotEmpty()
  employeeId: string;
}
