import { Controller, Get, Logger, Query } from '@nestjs/common';
import { WeatherDataService } from './weather-data.service';

@Controller('weather')
export class WeatherDataController {
  private readonly logger = new Logger(WeatherDataController.name);

  constructor(private weatherService: WeatherDataService) {}

  @Get('get')
  async getResults(@Query('latitude') latitude, @Query('longitude') longitude): Promise<any> {
    const hello = await this.weatherService.getResults(latitude, longitude);

    return hello;
  }
}
