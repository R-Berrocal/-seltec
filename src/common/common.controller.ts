import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';
import { CommonService } from './common.service';
import { PaginationOutputType } from './types/paginationOutput.type';
import { Repository } from 'typeorm';

export function createBaseController<T>() {
  @Controller('/')
  abstract class BaseController {
    readonly commonService: CommonService = new CommonService();
    constructor(readonly entity: Repository<T>) {}

    @Get()
    async findAll(
      @Query()
      paginationDto: PaginationDto,
    ): Promise<PaginationOutputType<T>> {
      return this.commonService.findAll<T>(paginationDto, this.entity);
    }
  }

  return BaseController;
}
