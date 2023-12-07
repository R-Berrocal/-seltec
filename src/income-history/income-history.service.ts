import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateIncomeHistoryDto } from './dto/create-income-history.dto';
import { UpdateIncomeHistoryDto } from './dto/update-income-history.dto';
import { Employee } from 'src/employee/entities/employee.entity';
import { Location } from 'src/location/entities/location.entity';
import { IncomeHistory } from './entities/income-history.entity';
import { Repository } from 'typeorm';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { EmployeeService } from 'src/employee/employee.service';
import { LocationService } from 'src/location/location.service';

@Injectable()
export class IncomeHistoryService {
  private readonly logger: Logger = new Logger('IncomeHistoryService');
  constructor(
    @InjectRepository(IncomeHistory)
    private readonly incomeHistoryRepository: Repository<IncomeHistory>,
    private readonly handleExceptionsService: HandleExceptionsService,
    private readonly employeeService: EmployeeService,
    private readonly locationService: LocationService,
  ) {}
  async create(createIncomeHistoryDto: CreateIncomeHistoryDto) {
    const { employee, location } = await this.validateRelations(
      createIncomeHistoryDto,
    );

    try {
      const incomeHistory = this.incomeHistoryRepository.create({
        ...createIncomeHistoryDto,
        employee,
        location,
      });
      return await this.incomeHistoryRepository.save(incomeHistory);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const incomeHistory = await this.incomeHistoryRepository.findOne({
      where: { id },
      relations: ['employee', 'location.group'],
    });
    if (!incomeHistory) {
      throw new NotFoundException(`Income History with ${id} not found`);
    }
    return incomeHistory;
  }

  async update(id: string, updateIncomeHistoryDto: UpdateIncomeHistoryDto) {
    await this.findOne(id);
    const { employee, location } = await this.validateRelations(
      updateIncomeHistoryDto,
    );
    try {
      const incomeHistory = await this.incomeHistoryRepository.preload({
        id,
        ...updateIncomeHistoryDto,
        employee,
        location,
      });
      await this.incomeHistoryRepository.save(incomeHistory);
      return incomeHistory;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const incomeHistory = await this.findOne(id);
    try {
      await this.incomeHistoryRepository.softDelete(id);
      return incomeHistory;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async validateRelations(
    createIncomeHistoryDto: CreateIncomeHistoryDto | UpdateIncomeHistoryDto,
  ) {
    let employee: Employee | undefined;
    let location: Location | undefined;

    if (createIncomeHistoryDto.employeeId) {
      employee = await this.employeeService.findOne(
        createIncomeHistoryDto.employeeId,
      );
    }
    if (createIncomeHistoryDto.locationId) {
      location = await this.locationService.findOne(
        createIncomeHistoryDto.locationId,
      );
    }

    return {
      employee,
      location,
    };
  }
}
