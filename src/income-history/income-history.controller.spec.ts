import { Test, TestingModule } from '@nestjs/testing';
import { IncomeHistoryController } from './income-history.controller';
import { IncomeHistoryService } from './income-history.service';

describe('IncomeHistoryController', () => {
  let controller: IncomeHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeHistoryController],
      providers: [IncomeHistoryService],
    }).compile();

    controller = module.get<IncomeHistoryController>(IncomeHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
