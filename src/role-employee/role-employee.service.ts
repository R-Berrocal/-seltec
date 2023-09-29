import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';
import { CreateRoleEmployeeDto } from './dto/create-role-employee.dto';
import { UpdateRoleEmployeeDto } from './dto/update-role-employee.dto';
import { RoleEmployee } from './entities/role-employee.entity';

@Injectable()
export class RoleEmployeeService {
  private logger: Logger = new Logger('RoleEmployeeService');
  constructor(
    @InjectRepository(RoleEmployee)
    private readonly roleEmployee: Repository<RoleEmployee>,
    readonly handleExceptionsService: HandleExceptionsService,
  ) {}
  async create(createRoleEmployeeDto: CreateRoleEmployeeDto) {
    try {
      const roleEmployee = this.roleEmployee.create(createRoleEmployeeDto);
      return await this.roleEmployee.save(roleEmployee);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const roleEmployee = await this.roleEmployee.findOneBy({ id });
    if (!roleEmployee) throw new NotFoundException('role employee not found');
    return roleEmployee;
  }

  async update(id: string, updateRoleEmployee: UpdateRoleEmployeeDto) {
    await this.findOne(id);
    try {
      const roleEmployee = await this.roleEmployee.preload({
        id,
        ...updateRoleEmployee,
      });
      await this.roleEmployee.save(roleEmployee);
      return roleEmployee;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const roleEmployee = await this.findOne(id);
    try {
      await this.roleEmployee.softDelete(id);
      return roleEmployee;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }
}
