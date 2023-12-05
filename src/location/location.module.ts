import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';
import { GroupModule } from 'src/group/group.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location]),
    HandleExceptionsModule,
    GroupModule,
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
