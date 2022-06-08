import { ClassSerializerInterceptor, HttpModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { GeoDataModule } from './geo-data/geo-data.module';
import { NewsDataModule } from './news-data/news-data.module';
import { SportsDataModule } from './sports-data/sports-data.module';
import { WeatherDataModule } from './weather-data/weather-data.module';

require('dotenv').config();

@Module({
  imports: [SportsDataModule, WeatherDataModule, GeoDataModule, NewsDataModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
