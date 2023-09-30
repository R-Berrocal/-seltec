import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), HandleExceptionsModule],
  controllers: [GroupController],
  providers: [GroupService],
  exports: [GroupService],
})
export class GroupModule {}
