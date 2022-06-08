import { HttpModule, Module } from '@nestjs/common';
import { GeoDataController } from './geo-data.controller';
import { GeoDataService } from './geo-data.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [GeoDataController],
  providers: [GeoDataService],
})
export class GeoDataModule {}
