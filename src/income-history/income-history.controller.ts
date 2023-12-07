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
import { IncomeHistoryService } from './income-history.service';
import { CreateIncomeHistoryDto } from './dto/create-income-history.dto';
import { UpdateIncomeHistoryDto } from './dto/update-income-history.dto';
import { IncomeHistory } from './entities/income-history.entity';
import { createBaseController } from 'src/common/common.controller';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';

const baseController = createBaseController<IncomeHistory>(
  ['employee', 'location.group'],
  '',
  ValidRoles.ADMIN,
  ValidRoles.USER,
);

@Controller('income-history')
export class IncomeHistoryController extends baseController {
  constructor(
    private readonly incomeHistoryService: IncomeHistoryService,
    @InjectRepository(IncomeHistory)
    readonly incomeHistoryRepository: Repository<IncomeHistory>,
  ) {
    super(incomeHistoryRepository);
  }

  @Auth(ValidRoles.ADMIN, ValidRoles.USER)
  @Post()
  create(@Body() createIncomeHistoryDto: CreateIncomeHistoryDto) {
    return this.incomeHistoryService.create(createIncomeHistoryDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.incomeHistoryService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateIncomeHistoryDto: UpdateIncomeHistoryDto,
  ) {
    return this.incomeHistoryService.update(id, updateIncomeHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.incomeHistoryService.remove(id);
  }
}
