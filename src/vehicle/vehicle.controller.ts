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
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { createBaseController } from 'src/common/common.controller';
import { Vehicle } from './entities/vehicle.entity';
import { Auth, GetUser } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { User } from 'src/users/entities/user.entity';

const baseController = createBaseController<Vehicle>([], 'company.id');

@Controller('vehicle')
export class VehicleController extends baseController {
  constructor(
    private readonly vehicleService: VehicleService,
    @InjectRepository(Vehicle) readonly vehicleRepository: Repository<Vehicle>,
  ) {
    super(vehicleRepository);
  }

  @Auth(ValidRoles.ADMIN, ValidRoles.COMPANY)
  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto, @GetUser() user: User) {
    return this.vehicleService.create(createVehicleDto, user);
  }

  @Auth()
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.vehicleService.findOne(id);
  }

  @Auth(ValidRoles.ADMIN, ValidRoles.COMPANY)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
    @GetUser() user: User,
  ) {
    return this.vehicleService.update(id, updateVehicleDto, user);
  }

  @Auth(ValidRoles.ADMIN, ValidRoles.COMPANY)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string, @GetUser() user: User) {
    return this.vehicleService.remove(id, user);
  }
}
