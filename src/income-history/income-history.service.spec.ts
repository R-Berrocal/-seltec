import { Test, TestingModule } from '@nestjs/testing';
import { IncomeHistoryService } from './income-history.service';

describe('IncomeHistoryService', () => {
  let service: IncomeHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomeHistoryService],
    }).compile();

    service = module.get<IncomeHistoryService>(IncomeHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
