import { HttpService, Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class GeoDataService {
  BASE_URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=';
  private readonly logger = new Logger(GeoDataService.name);
  public geoObj = null;

  constructor(private httpService: HttpService) {}

  async getCoordinates(): Promise<any> {
    if (!this.geoObj) {
      const geoService = await this.httpService
        .get(this.BASE_URL + process.env.ABSTRACT_KEY)
        .toPromise()
        .catch(err => {
          this.logger.log('App Direct error', err);
          return err;
        });

      this.geoObj = {
        latitude: geoService?.data?.latitude,
        longitude: geoService?.data?.longitude,
        city: geoService?.data?.city,
        country: geoService?.data?.country,
        country_code: geoService?.data?.country_code,
      };
    }

    return this.geoObj;
  }
}
