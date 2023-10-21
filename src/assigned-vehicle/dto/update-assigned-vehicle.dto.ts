import { PartialType } from '@nestjs/mapped-types';
import { CreateAssignedVehicleDto } from './create-assigned-vehicle.dto';

export class UpdateAssignedVehicleDto extends PartialType(CreateAssignedVehicleDto) {}
