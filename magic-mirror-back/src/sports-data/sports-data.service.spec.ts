import { Test, TestingModule } from '@nestjs/testing';
import { SportsDataService } from './sports-data.service';

describe('SportsDataService', () => {
  let service: SportsDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SportsDataService],
    }).compile();

    service = module.get<SportsDataService>(SportsDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
