import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';
import { CommonService } from './common.service';
import { PaginationOutputType } from './types/paginationOutput.type';
import { Repository } from 'typeorm';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

export function createBaseController<T>(
  entities?: string[],
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
    ): Promise<PaginationOutputType<T>> {
      return this.commonService.findAll<T>(
        paginationDto,
        this.entity,
        entities,
      );
    }
  }

  return BaseController;
}
