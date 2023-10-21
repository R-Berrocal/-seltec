import { Test, TestingModule } from '@nestjs/testing';
import { AssignedVehicleService } from './assigned-vehicle.service';

describe('AssignedVehicleService', () => {
  let service: AssignedVehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignedVehicleService],
    }).compile();

    service = module.get<AssignedVehicleService>(AssignedVehicleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
