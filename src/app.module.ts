import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { EnvConfiguration } from './config/env.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupModule } from './group/group.module';
import { CommonModule } from './common/common.module';
import { HandleExceptionsModule } from './handle-exceptions/handle-exceptions.module';
import { CompanyModule } from './company/company.module';
import { RoleEmployeeModule } from './role-employee/role-employee.module';
import { EmployeeModule } from './employee/employee.module';
import { ObservationsModule } from './observations/observations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [EnvConfiguration],
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
