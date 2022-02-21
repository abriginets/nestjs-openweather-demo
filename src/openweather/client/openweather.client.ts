import { Cache } from 'cache-manager';
import dayjs from 'dayjs';

import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { HttpClientService } from '../../http-client/http-client.service';
import { OPENWEATHER_API_BASE_URL, OPENWEATHER_API_KEY_ENV_VARIABLE_NAME } from '../constants';
import { OpenweatherDailyForecast } from '../interface/openweather.interface';

@Injectable()
export class OpenweatherClientService {
  private readonly apiKey: string;

  private readonly cacheKeyPrefix = 'openweather';

  constructor(
    private readonly httpClient: HttpClientService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    this.apiKey = this.configService.get(OPENWEATHER_API_KEY_ENV_VARIABLE_NAME);
  }

  getCacheKey(latitude: string, longitude: string): string {
    return `${this.cacheKeyPrefix}---daily-forecast---latitude-${latitude}-longitude-${longitude}`;
  }

  async getDailyForecast(latitude: string, longitude: string): Promise<OpenweatherDailyForecast> {
    const cacheKey = this.getCacheKey(latitude, longitude);
    const cached = await this.cacheManager.get<string>(cacheKey);

    if (!cached) {
      const result = await this.httpClient.get<OpenweatherDailyForecast>(
        OPENWEATHER_API_BASE_URL,
        '/data/2.5/onecall',
        {
          params: {
            lat: latitude,
            lon: longitude,
            appid: this.apiKey,
            exclude: 'current,minutely,hourly,alerts',
          },
        },
      );
      const ttl = dayjs().add(1, 'hour').diff(dayjs(), 'seconds');

      await this.cacheManager.set(cacheKey, JSON.stringify(result.data), { ttl });

      return result.data;
    }

    return JSON.parse(cached);
  }
}
