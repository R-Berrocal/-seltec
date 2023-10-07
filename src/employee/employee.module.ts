import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { Employee } from './entities/employee.entity';
import { HandleExceptionsModule } from 'src/handle-exceptions/handle-exceptions.module';
import { CompanyModule } from 'src/company/company.module';
import { GroupModule } from 'src/group/group.module';
import { RoleEmployeeModule } from 'src/role-employee/role-employee.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    HandleExceptionsModule,
    RoleEmployeeModule,
    CompanyModule,
    GroupModule,
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}
