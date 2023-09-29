import { Test, TestingModule } from '@nestjs/testing';
import { RoleEmployeeService } from './role-employee.service';

describe('RoleEmployeeService', () => {
  let service: RoleEmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleEmployeeService],
    }).compile();

    service = module.get<RoleEmployeeService>(RoleEmployeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
