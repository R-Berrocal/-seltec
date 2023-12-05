import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeHistory } from './entities/income-history.entity';
import { IncomeHistoryService } from './income-history.service';
import { IncomeHistoryController } from './income-history.controller';

@Module({
  imports: [TypeOrmModule.forFeature([IncomeHistory])],
  controllers: [IncomeHistoryController],
  providers: [IncomeHistoryService],
})
export class IncomeHistoryModule {}
