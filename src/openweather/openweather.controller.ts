import { Controller, Get, Param, Query } from '@nestjs/common';

import { ParseDatePipe } from '../shared/pipes/parse-date.pipe';
import { OpenweatherDailyForecast } from './interface/openweather.interface';
import { OpenweatherService } from './openweather.service';

@Controller('/openweather')
export class OpenweatherController {
  constructor(private readonly service: OpenweatherService) {}

  @Get('forecast/daily/lat/:latitude/lon/:longitude')
  async getForecastByCoordinates(
    @Param('latitude') latitude: string,
    @Param('longitude') longitude: string,
    @Query('date', ParseDatePipe) date?: Date,
  ): Promise<OpenweatherDailyForecast> {
    return await this.service.getDailyForecast(latitude, longitude, date);
  }
}
