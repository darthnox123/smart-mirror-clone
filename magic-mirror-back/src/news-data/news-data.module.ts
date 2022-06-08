import { HttpModule, Module } from '@nestjs/common';
import { GeoDataService } from 'src/geo-data/geo-data.service';
import { NewsDataController } from './news-data.controller';
import { NewsDataService } from './news-data.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [NewsDataController],
  providers: [NewsDataService, GeoDataService],
})
export class NewsDataModule {}
