import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
