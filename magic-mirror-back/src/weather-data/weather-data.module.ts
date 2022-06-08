import { HttpModule, Module } from '@nestjs/common';
import { GeoDataService } from 'src/geo-data/geo-data.service';
import { WeatherDataController } from './weather-data.controller';
import { WeatherDataService } from './weather-data.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WeatherDataController],
  providers: [WeatherDataService, GeoDataService],
})
export class WeatherDataModule {}
