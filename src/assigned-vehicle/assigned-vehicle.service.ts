import { Injectable, Logger } from '@nestjs/common';
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

  findAll() {
    return `This action returns all assignedVehicle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assignedVehicle`;
  }

  update(id: number, updateAssignedVehicleDto: UpdateAssignedVehicleDto) {
    return `This action updates a #${id} assignedVehicle`;
  }

  remove(id: number) {
    return `This action removes a #${id} assignedVehicle`;
  }

  async validateRelationsAssignVehicle(
    assignedVehicleDto: CreateAssignedVehicleDto | UpdateAssignedVehicleDto,
  ) {
    let vehicle: Vehicle;
    let employee: Employee;
    if (assignedVehicleDto.vehicle) {
      vehicle = await this.vehicleService.findOne(assignedVehicleDto.vehicle);
    }

    if (assignedVehicleDto.employee) {
      employee = await this.employeeService.findOne(
        assignedVehicleDto.employee,
      );
    }

    return { vehicle, employee };
  }
}
