import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate as IsUUID } from 'uuid';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { HandleExceptionsService } from 'src/handle-exceptions/handle-exceptions.service';

@Injectable()
export class CompanyService {
  private logger: Logger = new Logger('CompanyService');
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    readonly handleExceptionsService: HandleExceptionsService,
  ) {}
  async create(createCompanyDto: CreateCompanyDto) {
    try {
      const company = this.companyRepository.create(createCompanyDto);
      return await this.companyRepository.save(company);
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async findOne(term: string) {
    let company: Company;

    if (IsUUID(term)) {
      company = await this.companyRepository.findOne({
        where: { id: term },
        relations: ['employees', 'vehicles'],
      });
    } else {
      company = await this.companyRepository.findOne({
        where: { name: term.toUpperCase() },
        relations: ['employees', 'vehicles'],
      });
    }

    if (!company) throw new NotFoundException(`Company with ${term} not found`);
    return company;
  }

  async update(id: string, updateGroupDto: UpdateCompanyDto) {
    await this.findOne(id);
    try {
      const company = await this.companyRepository.preload({
        id,
        ...updateGroupDto,
      });
      await this.companyRepository.save(company);
      return company;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const company = await this.findOne(id);
    try {
      await this.companyRepository.softDelete(id);
      return company;
    } catch (error) {
      this.logger.error(error);
      this.handleExceptionsService.handleExceptions(error);
    }
  }
}
