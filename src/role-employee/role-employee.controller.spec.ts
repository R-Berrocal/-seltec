import { Test, TestingModule } from '@nestjs/testing';
import { RoleEmployeeController } from './role-employee.controller';
import { RoleEmployeeService } from './role-employee.service';

describe('RoleEmployeeController', () => {
  let controller: RoleEmployeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleEmployeeController],
      providers: [RoleEmployeeService],
    }).compile();

    controller = module.get<RoleEmployeeController>(RoleEmployeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
