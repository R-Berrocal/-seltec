import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncomeHistoryService } from './income-history.service';
import { CreateIncomeHistoryDto } from './dto/create-income-history.dto';
import { UpdateIncomeHistoryDto } from './dto/update-income-history.dto';

@Controller('income-history')
export class IncomeHistoryController {
  constructor(private readonly incomeHistoryService: IncomeHistoryService) {}

  @Post()
  create(@Body() createIncomeHistoryDto: CreateIncomeHistoryDto) {
    return this.incomeHistoryService.create(createIncomeHistoryDto);
  }

  @Get()
  findAll() {
    return this.incomeHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomeHistoryDto: UpdateIncomeHistoryDto) {
    return this.incomeHistoryService.update(+id, updateIncomeHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeHistoryService.remove(+id);
  }
}
