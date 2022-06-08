import { Controller, Get, Logger } from '@nestjs/common';
import { SportsDataService } from './sports-data.service';

@Controller('sports')
export class SportsDataController {
  footballGames: any = [];
  private readonly logger = new Logger(SportsDataController.name);

  constructor(private sportsService: SportsDataService) {}

  @Get('get')
  async getResults(): Promise<any> {
    // NTH add Bd implementation to get teams and sports + sports
    // getFootball data
    const football = await this.sportsService.getFootball();
    for (const game of football) {
      const obj = {
        league: game.league,
        country: game.league.country,
        homeTeam: game.teams.home,
        homeScore: game.goals.home,
        awayScore: game.goals.away,
        awayTeam: game.teams.away,
        date: game.fixture.date,
        status: game.fixture.status.short,
      };

      this.footballGames.push(obj);
    }

    return this.footballGames;

    // get Basketball Data
    // join and arrange data
  }
}
