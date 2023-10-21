import { Test, TestingModule } from '@nestjs/testing';
import { AssignedVehicleController } from './assigned-vehicle.controller';
import { AssignedVehicleService } from './assigned-vehicle.service';

describe('AssignedVehicleController', () => {
  let controller: AssignedVehicleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssignedVehicleController],
      providers: [AssignedVehicleService],
    }).compile();

    controller = module.get<AssignedVehicleController>(AssignedVehicleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
