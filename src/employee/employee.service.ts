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
    const { roleEmployee, company, groups } =
      await this.validateRelations(createEmployeeDto);
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
    if (IsUUID(term)) {
      employee = await this.employeeRepository.findOne({
        where: { id: term },
        relations: ['roleEmployee', 'company', 'groups'],
      });
    } else {
      employee = await this.employeeRepository.findOne({
        where: [{ email: term }, { identification: term }],
        relations: ['roleEmployee', 'company', 'groups'],
      });
    }

    if (!employee) {
      throw new NotFoundException(`Employee with ${term} not found`);
    }
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    await this.findOne(id);
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

  async remove(id: string) {
    const employee = await this.findOne(id);
    try {
      await this.employeeRepository.softDelete(id);
      return employee;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async validateRelations(employeDto: CreateEmployeeDto | UpdateEmployeeDto) {
    let roleEmployee: RoleEmployee;
    let company: Company;
    let groups: Group[];

    if (employeDto.role) {
      roleEmployee = await this.roleEmployeeService.findOne(employeDto.role);
    }
    if (employeDto.company) {
      company = await this.companyService.findOne(employeDto.company);
      delete company.employees;
    }

    if (employeDto.groups) {
      const groupPromises = employeDto.groups.map((group) =>
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
