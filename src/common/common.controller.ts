import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';
import { CommonService } from './common.service';
import { PaginationOutputType } from './types/paginationOutput.type';
import { Repository } from 'typeorm';
import { Auth, GetUser } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { User } from 'src/users/entities/user.entity';

export function createBaseController<T>(
  entities?: string[],
  searchCompany?: string,
  ...roles: ValidRoles[]
) {
  @Controller('/')
  abstract class BaseController {
    readonly commonService: CommonService = new CommonService();
    constructor(readonly entity: Repository<T>) {}

    @Get()
    @Auth(...roles)
    async findAll(
      @Query()
      paginationDto: PaginationDto,
      @GetUser() user: User,
    ): Promise<PaginationOutputType<T>> {
      if (
        searchCompany.length > 0 &&
        user.company?.id &&
        user.role === ValidRoles.COMPANY
      ) {
        const value = user.company.id;

        const keys = searchCompany.split('.');
        let temp = paginationDto;

        for (let i = 0; i < keys.length - 1; i++) {
          const key = keys[i];
          temp[key] = temp[key] || {};
          temp = temp[key];
        }

        temp[keys[keys.length - 1]] = value;
      }
      return this.commonService.findAll<T>(
        paginationDto,
        this.entity,
        entities,
      );
    }
  }

  return BaseController;
}
