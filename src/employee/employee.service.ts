import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CompanyService } from 'src/company/company.service';
import { GroupService } from 'src/group/group.service';
import { RoleEmployeeService } from 'src/role-employee/role-employee.service';

@Injectable()
export class EmployeeService {
  private readonly logger: Logger = new Logger('EmployeeService');
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly handleExceptionsService: HandleExceptionsService,
    private readonly roleEmployeeService: RoleEmployeeService,
    private readonly companyService: CompanyService,
    private readonly groupService: GroupService,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const roleEmployee = await this.roleEmployeeService.findOne(
      createEmployeeDto.role,
    );
    const company = await this.companyService.findOne(
      createEmployeeDto.company,
    );
    const groups = await this.validateGroups(createEmployeeDto.groups);
    try {
      const employee = this.employeeRepository.create({
        ...createEmployeeDto,
        roleEmployee,
        company,
        groups,
      });
      return await this.employeeRepository.save(employee);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }

  async validateGroups(groups: string[]) {
    const groupPromises = groups.map((group) =>
      this.groupService.findOne(group),
    );
    return await Promise.all(groupPromises);
  }
}
