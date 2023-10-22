import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { createBaseController } from 'src/common/common.controller';
import { AssignedVehicle } from './entities/assigned-vehicle.entity';
import { AssignedVehicleService } from './assigned-vehicle.service';
import { CreateAssignedVehicleDto } from './dto/create-assigned-vehicle.dto';
import { UpdateAssignedVehicleDto } from './dto/update-assigned-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const baseController = createBaseController<AssignedVehicle>([
  'employee',
  'vehicle',
]);

@Controller('assigned-vehicle')
export class AssignedVehicleController extends baseController {
  constructor(
    private readonly assignedVehicleService: AssignedVehicleService,
    @InjectRepository(AssignedVehicle)
    readonly assignedVehicleRepository: Repository<AssignedVehicle>,
  ) {
    super(assignedVehicleRepository);
  }

  @Post()
  create(@Body() createAssignedVehicleDto: CreateAssignedVehicleDto) {
    return this.assignedVehicleService.create(createAssignedVehicleDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.assignedVehicleService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAssignedVehicleDto: UpdateAssignedVehicleDto,
  ) {
    return this.assignedVehicleService.update(id, updateAssignedVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.assignedVehicleService.remove(id);
  }
}
