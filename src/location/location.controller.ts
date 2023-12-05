import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { createBaseController } from 'src/common/common.controller';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth } from 'src/auth/decorators';

const baseController = createBaseController<Location>(['group'], '');

@Controller('location')
export class LocationController extends baseController {
  constructor(
    private readonly locationService: LocationService,
    @InjectRepository(Location)
    readonly locationRepository: Repository<Location>,
  ) {
    super(locationRepository);
  }

  @Auth(ValidRoles.ADMIN)
  @Post()
  create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationService.create(createLocationDto);
  }

  @Auth()
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.locationService.findOne(term);
  }

  @Auth(ValidRoles.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationService.update(id, updateLocationDto);
  }

  @Auth(ValidRoles.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.locationService.remove(id);
  }
}
