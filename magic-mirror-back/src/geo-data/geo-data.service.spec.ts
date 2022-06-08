import { Test, TestingModule } from '@nestjs/testing';
import { GeoDataService } from './geo-data.service';

describe('GeoDataService', () => {
  let service: GeoDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoDataService],
    }).compile();

    service = module.get<GeoDataService>(GeoDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
