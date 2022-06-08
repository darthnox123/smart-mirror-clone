import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3005);

  if (module.hot) {
    module.hot.accept();
    await module.hot.dispose(() => app.close());
  }
}
bootstrap();
