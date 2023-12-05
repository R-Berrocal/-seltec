import { Injectable } from '@nestjs/common';
import { CreateIncomeHistoryDto } from './dto/create-income-history.dto';
import { UpdateIncomeHistoryDto } from './dto/update-income-history.dto';

@Injectable()
export class IncomeHistoryService {
  create(createIncomeHistoryDto: CreateIncomeHistoryDto) {
    return 'This action adds a new incomeHistory';
  }

  findAll() {
    return `This action returns all incomeHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incomeHistory`;
  }

  update(id: number, updateIncomeHistoryDto: UpdateIncomeHistoryDto) {
    return `This action updates a #${id} incomeHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} incomeHistory`;
  }
}
