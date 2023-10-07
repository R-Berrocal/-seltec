import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObservationsService } from './observations.service';
import { ObservationsController } from './observations.controller';
import { Observation } from './entities/observation.entity';
import { EmployeeModule } from 'src/employee/employee.module';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Observation]),
    EmployeeModule,
    HandleExceptionsModule,
  ],
  controllers: [ObservationsController],
  providers: [ObservationsService],
})
export class ObservationsModule {}
