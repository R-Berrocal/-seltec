import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  @IsNotEmpty()
  groupId: string;
}
