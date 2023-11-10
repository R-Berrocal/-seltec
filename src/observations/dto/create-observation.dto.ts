import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateObservationDto {
  @IsString()
  @IsOptional()
  observation?: string;

  @IsNotEmpty()
  initDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsUUID()
  @IsNotEmpty()
  employeeId: string;
}
