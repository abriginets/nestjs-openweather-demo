import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Openweather API demo')
    .setDescription('Openweather API demo')
    .setVersion('1.0')
    .addTag('openweather')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, swaggerDocument);

  app.setGlobalPrefix('api');
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
