import dayjs from 'dayjs';

import { Injectable } from '@nestjs/common';

import { OpenweatherClientService } from './client/openweather.client';
import { OpenweatherDailyForecast } from './interface/openweather.interface';

@Injectable()
export class OpenweatherService {
  constructor(private readonly client: OpenweatherClientService) {}

  async getDailyForecast(latitude: string, longitude: string, date?: Date): Promise<OpenweatherDailyForecast> {
    const forecast = await this.client.getDailyForecast(latitude, longitude);

    if (!date) {
      return forecast;
    }

    return this.mapDailyForecastToSingleDate(forecast, date);
  }

  mapDailyForecastToSingleDate(data: OpenweatherDailyForecast, date: Date): OpenweatherDailyForecast {
    const searchDate = dayjs(date);

    return {
      ...data,
      daily: data.daily.filter((daily) => dayjs.unix(daily.dt).isSame(searchDate, 'day')),
    };
  }
}
