import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { createBaseController } from 'src/common/common.controller';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/users/entities/user.entity';

const baseController = createBaseController<Employee>(
  ['company', 'observations'],
  'company.id',
);

@Controller('employee')
export class EmployeeController extends baseController {
  constructor(
    private readonly employeeService: EmployeeService,
    @InjectRepository(Employee)
    readonly employeeRepository: Repository<Employee>,
  ) {
    super(employeeRepository);
  }

  @Auth(ValidRoles.ADMIN)
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto, @GetUser() user: User) {
    return this.employeeService.create(createEmployeeDto, user);
  }

  @Auth()
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.employeeService.findOne(term);
  }

  @Auth(ValidRoles.ADMIN)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
    @GetUser() user: User,
  ) {
    return this.employeeService.update(id, updateEmployeeDto, user);
  }

  @Auth(ValidRoles.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: string, @GetUser() user: User) {
    return this.employeeService.remove(id, user);
  }
}
