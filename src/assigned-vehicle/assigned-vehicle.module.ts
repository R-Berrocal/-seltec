import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignedVehicleService } from './assigned-vehicle.service';
import { AssignedVehicleController } from './assigned-vehicle.controller';
import { AssignedVehicle } from './entities/assigned-vehicle.entity';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';
import { VehicleModule } from 'src/vehicle/vehicle.module';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AssignedVehicle]),
    HandleExceptionsModule,
    VehicleModule,
    EmployeeModule,
  ],
  controllers: [AssignedVehicleController],
  providers: [AssignedVehicleService],
})
export class AssignedVehicleModule {}
