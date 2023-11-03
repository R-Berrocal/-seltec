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
        paginationDto[searchCompany] = user.company?.id;
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
