import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObservationsService } from './observations.service';
import { ObservationsController } from './observations.controller';
import { Observation } from './entities/observation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Observation])],
  controllers: [ObservationsController],
  providers: [ObservationsService],
})
export class ObservationsModule {}
