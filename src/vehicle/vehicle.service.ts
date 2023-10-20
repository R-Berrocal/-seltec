import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { CompanyService } from 'src/company/company.service';
import { Company } from 'src/company/entities/company.entity';

@Injectable()
export class VehicleService {
  private logger: Logger = new Logger('VehicleService');
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
    private readonly handleExceptionsService: HandleExceptionsService,
    private readonly companyService: CompanyService,
  ) {}
  async create(createVehicleDto: CreateVehicleDto) {
    const { company } = await this.validateRelationsVehicle(createVehicleDto);
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

  findOne(id: string) {
    const vehicle = this.vehicleRepository.findOne({
      where: { id },
      relations: ['company'],
    });
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ${id} not found`);
    }
    return vehicle;
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return `This action updates a #${id} vehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicle`;
  }

  async validateRelationsVehicle({ company: companyId }: CreateVehicleDto) {
    let company: Company;
    if (companyId) {
      company = await this.companyService.findOne(companyId);
      if (!company) {
        throw new NotFoundException(`Company with ${company.id} not found`);
      }

      delete company.employees;
    }
    return { company };
  }
}
