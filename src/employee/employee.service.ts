import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate as IsUUID } from 'uuid';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { CompanyService } from 'src/company/company.service';
import { GroupService } from 'src/group/group.service';
import { RoleEmployeeService } from 'src/role-employee/role-employee.service';
import { RoleEmployee } from 'src/role-employee/entities/role-employee.entity';
import { Group } from 'src/group/entities/group.entity';
import { Company } from 'src/company/entities/company.entity';
import { User } from 'src/users/entities/user.entity';

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
  async create(createEmployeeDto: CreateEmployeeDto, userAuth: User) {
    const { roleEmployee, company, groups } =
      await this.validateRelations(createEmployeeDto);

    this.companyService.validateUserAuth(company.id, userAuth);
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

  async findOne(term: string) {
    let employee: Employee;
    const relations = [
      'roleEmployee',
      'company',
      'groups',
      'observations',
      'assignedVehicles.vehicle',
    ];
    if (IsUUID(term)) {
      employee = await this.employeeRepository.findOne({
        where: { id: term },
        relations,
        order: {
          observations: {
            createdAt: 'DESC',
          },
        },
      });
    } else {
      employee = await this.employeeRepository.findOne({
        where: [{ email: term }, { identification: term }],
        relations,
        order: {
          observations: {
            createdAt: 'DESC',
          },
        },
      });
    }

    if (!employee) {
      throw new NotFoundException(`Employee with ${term} not found`);
    }

    return employee;
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
    userAuth: User,
  ) {
    const employee = await this.findOne(id);
    this.companyService.validateUserAuth(employee.company?.id, userAuth);
    const { roleEmployee, company, groups } =
      await this.validateRelations(updateEmployeeDto);
    try {
      const employee = await this.employeeRepository.preload({
        id,
        ...updateEmployeeDto,
        roleEmployee,
        company,
        groups,
      });
      await this.employeeRepository.save(employee);
      return employee;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string, userAuth: User) {
    const employee = await this.findOne(id);
    this.companyService.validateUserAuth(employee.company?.id, userAuth);
    try {
      await this.employeeRepository.softDelete(id);
      return employee;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async validateRelations(employeeDto: CreateEmployeeDto | UpdateEmployeeDto) {
    let roleEmployee: RoleEmployee | undefined;
    let company: Company | undefined;
    let groups: Group[] | undefined;

    if (employeeDto.role) {
      roleEmployee = await this.roleEmployeeService.findOne(employeeDto.role);
    }
    if (employeeDto.company) {
      company = await this.companyService.findOne(employeeDto.company);
      delete company.employees;
      delete company.vehicles;
      delete company.users;
    }

    if (employeeDto.groups) {
      const groupPromises = employeeDto.groups.map((group) =>
        this.groupService.findOne(group),
      );
      groups = (await Promise.all(groupPromises)).map((group) => {
        delete group.employees;
        return group;
      });
    }

    return {
      roleEmployee,
      groups,
      company,
    };
  }
}
