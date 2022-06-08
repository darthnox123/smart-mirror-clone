import { Test, TestingModule } from '@nestjs/testing';
import { NewsDataService } from './news-data.service';

describe('NewsDataService', () => {
  let service: NewsDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsDataService],
    }).compile();

    service = module.get<NewsDataService>(NewsDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
