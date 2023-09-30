import { Module } from '@nestjs/common';
import { RoleEmployeeService } from './role-employee.service';
import { RoleEmployeeController } from './role-employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEmployee } from './entities/role-employee.entity';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEmployee]), HandleExceptionsModule],
  controllers: [RoleEmployeeController],
  providers: [RoleEmployeeService],
  exports: [RoleEmployeeService],
})
export class RoleEmployeeModule {}
