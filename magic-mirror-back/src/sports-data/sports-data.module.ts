import { HttpModule, Module } from '@nestjs/common';
import { SportsDataController } from './sports-data.controller';
import { SportsDataService } from './sports-data.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [SportsDataController],
  providers: [SportsDataService],
})
export class SportsDataModule {}
