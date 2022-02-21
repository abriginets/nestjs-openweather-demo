import { OgmaLogger, OgmaService } from '@ogma/nestjs-module';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpClientService {
  constructor(@OgmaLogger(HttpClientService) private readonly logger: OgmaService) {}

  async get<T = unknown>(baseUrl: string, path: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      return await axios.get(`${baseUrl}${path}`, options);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.isAxiosError) {
        this.logger.error(
          `HttpClientService exception occured: ${axiosError.message} (res.body: ${JSON.stringify(
            axiosError.response.data,
          )})`,
        );
      }

      throw error;
    }
  }

  async post<T = unknown>(
    baseUrl: string,
    path: string,
    body: unknown,
    options?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return await axios.post(`${baseUrl}${path}`, body, options);
  }
}
