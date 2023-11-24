import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { CompanyService } from 'src/company/company.service';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class VehicleService {
  private logger: Logger = new Logger('VehicleService');
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
    private readonly handleExceptionsService: HandleExceptionsService,
    private readonly companyService: CompanyService,
  ) {}
  async create(createVehicleDto: CreateVehicleDto, userAuth: User) {
    const { company } = await this.validateRelationsVehicle(createVehicleDto);
    this.companyService.validateUserAuth(company?.id, userAuth);
    try {
      const vehicle = this.vehicleRepository.create({
        ...createVehicleDto,
        company,
      });
      return await this.vehicleRepository.save(vehicle);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const vehicle = await this.vehicleRepository.findOne({
      where: { id },
      relations: ['company'],
    });
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ${id} not found`);
    }
    return vehicle;
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto, userAuth: User) {
    const vehicle = await this.findOne(id);
    this.companyService.validateUserAuth(vehicle.company?.id, userAuth);
    const { company } = await this.validateRelationsVehicle(updateVehicleDto);
    try {
      const vehicle = await this.vehicleRepository.preload({
        id,
        ...updateVehicleDto,
        company,
      });
      await this.vehicleRepository.save(vehicle);
      return vehicle;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string, userAuth: User) {
    const vehicle = await this.findOne(id);
    this.companyService.validateUserAuth(vehicle.company?.id, userAuth);
    try {
      await this.vehicleRepository.softDelete(id);
      return vehicle;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async validateRelationsVehicle(
    vehicleDto: CreateVehicleDto | UpdateVehicleDto,
  ) {
    let company: Company;
    if (vehicleDto.company) {
      company = await this.companyService.findOne(vehicleDto.company);
      delete company.employees;
      delete company.vehicles;
      delete company.users;
    }
    return { company };
  }
}
