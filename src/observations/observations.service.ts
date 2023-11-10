import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeService } from 'src/employee/employee.service';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { CreateObservationDto } from './dto/create-observation.dto';
import { UpdateObservationDto } from './dto/update-observation.dto';
import { Observation } from './entities/observation.entity';

@Injectable()
export class ObservationsService {
  private logger = new Logger('ObservationsService');
  constructor(
    @InjectRepository(Observation)
    private observationRepository: Repository<Observation>,
    private employeeService: EmployeeService,
    private handleExceptionsService: HandleExceptionsService,
  ) {}

  async create(createObservationDto: CreateObservationDto) {
    const employee = await this.employeeService.findOne(
      createObservationDto.employeeId,
    );
    try {
      const observation = this.observationRepository.create({
        ...createObservationDto,
        employee,
      });
      return await this.observationRepository.save(observation);
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findOne(id: string) {
    const observation = await this.observationRepository.findOne({
      where: { id },
      relations: ['employee.roleEmployee'],
    });

    if (!observation) {
      throw new NotFoundException(`Observation with ${id} not found`);
    }

    return observation;
  }

  async update(id: string, updateObservationDto: UpdateObservationDto) {
    await this.findOne(id);
    try {
      const observation = await this.observationRepository.preload({
        id,
        ...updateObservationDto,
      });
      await this.observationRepository.save(observation);
      return observation;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async remove(id: string) {
    const observation = await this.findOne(id);
    try {
      await this.observationRepository.softDelete(id);
      return observation;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }
}
