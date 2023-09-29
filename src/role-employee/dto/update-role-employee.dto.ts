import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleEmployeeDto } from './create-role-employee.dto';

export class UpdateRoleEmployeeDto extends PartialType(CreateRoleEmployeeDto) {}
