import { HttpService, Injectable, Scope } from '@nestjs/common';
import { GeoDataService } from 'src/geo-data/geo-data.service';

@Injectable()
export class NewsDataService {
  BASE_URL = 'https://newsapi.org/v2/top-headlines';

  constructor(private httpService: HttpService, private readonly geoService: GeoDataService) {}

  async getResults(country_code): Promise<any> {
    const today = await this.httpService
      .get(this.BASE_URL + '?country=' + country_code + '&apiKey=' + process.env.NEWS_API_KEY)
      .toPromise();

    return today.data;
  }
}
