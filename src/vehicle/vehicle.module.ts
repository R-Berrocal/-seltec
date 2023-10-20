import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle]),
    HandleExceptionsModule,
    CompanyModule,
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
