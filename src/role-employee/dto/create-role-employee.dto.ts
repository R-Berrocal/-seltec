import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateRoleEmployeeDto {
  @IsNotEmpty()
  @MinLength(5)
  name: string;
}
