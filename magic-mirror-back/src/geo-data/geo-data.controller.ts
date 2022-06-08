import { Controller, Get, Logger } from '@nestjs/common';
import { GeoDataService } from './geo-data.service';

@Controller('geo')
export class GeoDataController {
  private readonly logger = new Logger(GeoDataController.name);

  constructor(private geoService: GeoDataService) {}

  @Get('get')
  async getResults(): Promise<any> {
    const hello = await this.geoService.getCoordinates();

    return hello;
  }
}
