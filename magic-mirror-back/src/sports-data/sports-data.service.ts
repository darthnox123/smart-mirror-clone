import { HttpService, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SportsDataService {
  private readonly logger = new Logger(SportsDataService.name);
  FOOTBALL_BASE_URL = 'https://api-football-v1.p.rapidapi.com';
  BASKETBALL_BASE_URL = 'https://api-basketball.p.rapidapi.com';
  footballfixture: any = [];

  constructor(private httpService: HttpService) {}

  async getFootball(): Promise<any> {
    // NTH add Bd implementation to get teams and sports + sports
    // Get Team : Benfica
    const team = await this.httpService
      .get(this.FOOTBALL_BASE_URL + '/v3/teams?name=Benfica', {
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPID_API_KEY,
        },
      })
      .toPromise()
      .catch(err => {
        this.logger.log('App Direct error', err);
        return err;
      });

    const fixtures = await this.httpService
      .get(this.FOOTBALL_BASE_URL + '/v3/fixtures?season=2021&team=' + team.data.response[0].team.id, {
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.RAPID_API_KEY,
        },
      })
      .toPromise()
      .catch(err => {
        this.logger.log('App Direct error', err);
        return err;
      });

    for (const hello of fixtures.data.response) {
      let fDate = new Date().setDate(new Date().getDate() - 30);
      let lDate = new Date().setDate(new Date().getDate() + 30);
      let cDate = new Date(hello.fixture.date).setMonth(new Date(hello.fixture.date).getMonth());
      if (cDate <= lDate && cDate >= fDate) {
        this.footballfixture.push(hello);
      }
    }

    return this.footballfixture;
  }

  async getBasketball(): Promise<any> {}
}
