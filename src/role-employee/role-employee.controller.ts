import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createBaseController } from 'src/common/common.controller';
import { RoleEmployeeService } from './role-employee.service';
import { CreateRoleEmployeeDto } from './dto/create-role-employee.dto';
import { UpdateRoleEmployeeDto } from './dto/update-role-employee.dto';
import { RoleEmployee } from './entities/role-employee.entity';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

const baseController = createBaseController<RoleEmployee>([], '');

@Controller('role-employee')
export class RoleEmployeeController extends baseController {
  constructor(
    private readonly roleEmployeeService: RoleEmployeeService,
    @InjectRepository(RoleEmployee)
    readonly roleEmployeeRepository: Repository<RoleEmployee>,
  ) {
    super(roleEmployeeRepository);
  }

  @Auth(ValidRoles.ADMIN)
  @Post()
  create(@Body() createRoleEmployeeDto: CreateRoleEmployeeDto) {
    return this.roleEmployeeService.create(createRoleEmployeeDto);
  }

  @Auth()
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.roleEmployeeService.findOne(term);
  }

  @Auth(ValidRoles.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRoleEmployeeDto: UpdateRoleEmployeeDto,
  ) {
    return this.roleEmployeeService.update(id, updateRoleEmployeeDto);
  }

  @Auth(ValidRoles.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.roleEmployeeService.remove(id);
  }
}
