import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfiguration } from './config/env.config';
import { GroupModule } from './group/group.module';
import { CommonModule } from './common/common.module';
import { HandleExceptionsModule } from './handle-exceptions/handle-exceptions.module';
import { CompanyModule } from './company/company.module';
import { RoleEmployeeModule } from './role-employee/role-employee.module';
import { EmployeeModule } from './employee/employee.module';
import { ObservationsModule } from './observations/observations.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AssignedVehicleModule } from './assigned-vehicle/assigned-vehicle.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: EnvConfiguration().databaseUrl,
      logging: EnvConfiguration().environment === 'dev',
      autoLoadEntities: true,
      synchronize: EnvConfiguration().environment === 'dev',
    }),
    CommonModule,
    GroupModule,
    HandleExceptionsModule,
    CompanyModule,
    RoleEmployeeModule,
    EmployeeModule,
    ObservationsModule,
    VehicleModule,
    AssignedVehicleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
