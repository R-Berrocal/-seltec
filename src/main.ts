import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { EnvConfiguration } from './config/env.config';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  const environment = EnvConfiguration();
  console.log({ environment });
  await app.listen(PORT, async () =>
    console.log(`🚀 Server ready at: ${await app.getUrl()}`),
  );
}
bootstrap();
