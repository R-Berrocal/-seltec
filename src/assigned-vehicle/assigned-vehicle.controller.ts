import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssignedVehicleService } from './assigned-vehicle.service';
import { CreateAssignedVehicleDto } from './dto/create-assigned-vehicle.dto';
import { UpdateAssignedVehicleDto } from './dto/update-assigned-vehicle.dto';

@Controller('assigned-vehicle')
export class AssignedVehicleController {
  constructor(
    private readonly assignedVehicleService: AssignedVehicleService,
  ) {}

  @Post()
  create(@Body() createAssignedVehicleDto: CreateAssignedVehicleDto) {
    return this.assignedVehicleService.create(createAssignedVehicleDto);
  }

  @Get()
  findAll() {
    return this.assignedVehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignedVehicleService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssignedVehicleDto: UpdateAssignedVehicleDto,
  ) {
    return this.assignedVehicleService.update(+id, updateAssignedVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assignedVehicleService.remove(+id);
  }
}
