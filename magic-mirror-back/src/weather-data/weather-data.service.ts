import { HttpService, Injectable } from '@nestjs/common';
import { iconTable } from 'src/constants/icons';
import { GeoDataService } from 'src/geo-data/geo-data.service';

@Injectable()
export class WeatherDataService {
  // NTH Location
  BASE_URL = 'https://api.openweathermap.org/data/2.5/';
  public icons = iconTable;

  constructor(private httpService: HttpService, private readonly geoService: GeoDataService) {}

  async getResults(lat, lon): Promise<any> {
    const today = await this.httpService
      .post(
        this.BASE_URL +
          'onecall?lat=' +
          lat +
          '&lon=' +
          lon +
          '&exclude=hourly,minutely&lang=pt&units=metric&appid=' +
          process.env.WEATHER_API,
      )
      .toPromise();

    today.data.daily.shift();
    today.data.daily.unshift(today.data.current);

    const finalObj = today.data.daily.map(day => ({
      weekDay: new Date(day.dt * 1000).toLocaleString(),
      temp: Math.round(day.temp.day || day.temp),
      description: day.weather[0].description,
      icon: 'wi ' + this.icons[day.weather[0].icon],
      feelsLike: day.feels_like.day || day.feels_like,
      minTemp: Math.round(day.temp.min),
      maxTemp: Math.round(day.temp.max),
    }));

    return finalObj;
  }
}
