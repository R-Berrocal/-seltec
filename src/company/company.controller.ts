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
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { createBaseController } from 'src/common/common.controller';
import { Company } from './entities/company.entity';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Auth, GetUser } from 'src/auth/decorators';
import { User } from 'src/users/entities/user.entity';

const baseController = createBaseController<Company>(
  [],
  ValidRoles.ADMIN,
  ValidRoles.USER,
);

@Controller('company')
export class CompanyController extends baseController {
  constructor(
    private readonly companyService: CompanyService,
    @InjectRepository(Company) readonly companyRepository: Repository<Company>,
  ) {
    super(companyRepository);
  }

  @Auth(ValidRoles.ADMIN)
  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Auth(ValidRoles.COMPANY)
  @Get('/auth')
  findOneUserCompany(@GetUser() user: User) {
    return this.companyService.findOne(user.company?.id || 'user');
  }

  @Auth(ValidRoles.ADMIN, ValidRoles.USER)
  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.companyService.findOne(term);
  }

  @Auth(ValidRoles.ADMIN)
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companyService.update(id, updateCompanyDto);
  }

  @Auth(ValidRoles.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.companyService.remove(id);
  }
}
