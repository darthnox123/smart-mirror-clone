import { Controller, Get, Logger, Query } from '@nestjs/common';
import { NewsDataService } from './news-data.service';

@Controller('news')
export class NewsDataController {
  private readonly logger = new Logger(NewsDataController.name);

  constructor(private newsService: NewsDataService) {}

  @Get('get')
  async getResults(@Query('geo') query): Promise<any> {
    const hello = await this.newsService.getResults(query);
    return hello;
  }
}
