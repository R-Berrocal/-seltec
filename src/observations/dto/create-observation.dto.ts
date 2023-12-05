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

  @IsNotEmpty()
  initDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsUUID()
  @IsNotEmpty()
  employeeId: string;
}
