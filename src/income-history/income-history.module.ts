import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncomeHistory } from './entities/income-history.entity';
import { IncomeHistoryService } from './income-history.service';
import { IncomeHistoryController } from './income-history.controller';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';
import { EmployeeModule } from 'src/employee/employee.module';
import { LocationModule } from 'src/location/location.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([IncomeHistory]),
    HandleExceptionsModule,
    EmployeeModule,
    LocationModule,
  ],
  controllers: [IncomeHistoryController],
  providers: [IncomeHistoryService],
})
export class IncomeHistoryModule {}
