import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssignedVehicleDto } from './dto/create-assigned-vehicle.dto';
import { UpdateAssignedVehicleDto } from './dto/update-assigned-vehicle.dto';
import { AssignedVehicle } from './entities/assigned-vehicle.entity';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { VehicleService } from 'src/vehicle/vehicle.service';
import { EmployeeService } from 'src/employee/employee.service';

@Injectable()
export class AssignedVehicleService {
  private logger: Logger = new Logger('AssignedVehicleService');
  constructor(
    @InjectRepository(AssignedVehicle)
    private readonly assignedVehicleRepository: Repository<AssignedVehicle>,
    private readonly handleExceptionsService: HandleExceptionsService,
    private readonly vehicleService: VehicleService,
    private readonly employeeService: EmployeeService,
  ) {}
  async create(createAssignedVehicleDto: CreateAssignedVehicleDto) {
    const { vehicle, employee } = await this.validateRelationsAssignVehicle(
      createAssignedVehicleDto,
    );
    try {
      const assignedVehicle = this.assignedVehicleRepository.create({
        ...createAssignedVehicleDto,
        vehicle,
        employee,
      });

      return await this.assignedVehicleRepository.save(assignedVehicle);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const assignedVehicle = await this.assignedVehicleRepository.findOne({
      where: { id },
      relations: ['vehicle', 'employee'],
    });

    if (!assignedVehicle) {
      throw new NotFoundException(`AssignedVehicle with ${id} not found`);
    }

    return assignedVehicle;
  }

  async update(id: string, updateAssignedVehicleDto: UpdateAssignedVehicleDto) {
    await this.findOne(id);
    const { employee, vehicle } = await this.validateRelationsAssignVehicle(
      updateAssignedVehicleDto,
    );
    try {
      const assignedVehicle = await this.assignedVehicleRepository.preload({
        id,
        ...updateAssignedVehicleDto,
        employee,
        vehicle,
      });
      await this.assignedVehicleRepository.save(assignedVehicle);
      return assignedVehicle;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const assignedVehicle = await this.findOne(id);
    try {
      await this.assignedVehicleRepository.softDelete(id);
      return assignedVehicle;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async validateRelationsAssignVehicle(
    assignedVehicleDto: CreateAssignedVehicleDto | UpdateAssignedVehicleDto,
  ) {
    let vehicle: Vehicle;
    let employee: Employee;
    if (assignedVehicleDto.vehicle) {
      vehicle = await this.vehicleService.findOne(assignedVehicleDto.vehicle);
      delete vehicle.company;
      delete vehicle.assignedVehicles;
    }

    if (assignedVehicleDto.employee) {
      employee = await this.employeeService.findOne(
        assignedVehicleDto.employee,
      );
      delete employee.company;
      delete employee.groups;
      delete employee.assignedVehicles;
      delete employee.observations;
    }

    return { vehicle, employee };
  }
}
