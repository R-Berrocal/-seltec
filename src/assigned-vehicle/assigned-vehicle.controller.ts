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
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createBaseController } from 'src/common/common.controller';
import { AssignedVehicle } from './entities/assigned-vehicle.entity';
import { AssignedVehicleService } from './assigned-vehicle.service';
import { CreateAssignedVehicleDto } from './dto/create-assigned-vehicle.dto';
import { UpdateAssignedVehicleDto } from './dto/update-assigned-vehicle.dto';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth } from 'src/auth/decorators';

const baseController = createBaseController<AssignedVehicle>(
  ['employee', 'vehicle'],
  ValidRoles.ADMIN,
  ValidRoles.USER,
);

@Controller('assigned-vehicle')
export class AssignedVehicleController extends baseController {
  constructor(
    private readonly assignedVehicleService: AssignedVehicleService,
    @InjectRepository(AssignedVehicle)
    readonly assignedVehicleRepository: Repository<AssignedVehicle>,
  ) {
    super(assignedVehicleRepository);
  }

  @Auth(ValidRoles.ADMIN)
  @Post()
  create(@Body() createAssignedVehicleDto: CreateAssignedVehicleDto) {
    return this.assignedVehicleService.create(createAssignedVehicleDto);
  }

  @Auth()
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.assignedVehicleService.findOne(id);
  }

  @Auth(ValidRoles.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAssignedVehicleDto: UpdateAssignedVehicleDto,
  ) {
    return this.assignedVehicleService.update(id, updateAssignedVehicleDto);
  }

  @Auth(ValidRoles.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.assignedVehicleService.remove(id);
  }
}
