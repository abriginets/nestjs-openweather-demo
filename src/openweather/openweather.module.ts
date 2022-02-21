import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HttpClientModule } from '../http-client/http-client.module';
import { OpenweatherClientService } from './client/openweather.client';
import { OpenweatherController } from './openweather.controller';
import { OpenweatherService } from './openweather.service';

@Module({
  imports: [ConfigModule, HttpClientModule],
  controllers: [OpenweatherController],
  providers: [OpenweatherService, OpenweatherClientService],
  exports: [OpenweatherService],
})
export class OpenweatherModule {}
