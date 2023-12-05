import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate as IsUUID } from 'uuid';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { GroupService } from 'src/group/group.service';
import { Group } from 'src/group/entities/group.entity';

@Injectable()
export class LocationService {
  private logger: Logger = new Logger('GroupService');
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    readonly handleExceptionsService: HandleExceptionsService,
    private readonly groupService: GroupService,
  ) {}
  async create(createLocationDto: CreateLocationDto) {
    const group = await this.groupService.findOne(createLocationDto.groupId);
    try {
      const location = this.locationRepository.create({
        group,
        ...createLocationDto,
      });
      return await this.locationRepository.save(location);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async findOne(term: string) {
    let location: Location;
    if (IsUUID(term)) {
      location = await this.locationRepository.findOne({
        where: { id: term },
        relations: ['group'],
      });
    } else {
      location = await this.locationRepository.findOne({
        where: { name: term.toUpperCase() },
        relations: ['group'],
      });
    }
    if (!location) {
      throw new NotFoundException(`Location with ${term} not found`);
    }
    return location;
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    let group: Group;
    await this.findOne(id);
    if (updateLocationDto.groupId) {
      group = await this.groupService.findOne(updateLocationDto.groupId);
    }
    try {
      const location = await this.locationRepository.preload({
        id,
        group,
        ...updateLocationDto,
      });
      await this.locationRepository.save(location);
      return location;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const location = await this.findOne(id);
    try {
      await this.locationRepository.softDelete(id);
      return location;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }
}
