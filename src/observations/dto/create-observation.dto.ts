import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateObservationDto {
  @IsString()
  @IsOptional()
  observation?: string;

  @IsBoolean()
  @IsNotEmpty()
  isApproved: boolean;

  @IsOptional()
  initDate: Date;

  @IsOptional()
  endDate: Date;

  @IsUUID()
  @IsNotEmpty()
  employeeId: string;
}
