import { OgmaModule } from '@ogma/nestjs-module';
import { ExpressParser } from '@ogma/platform-express';
import filesystemStore from 'cache-manager-fs-hash';

import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HttpClientModule } from './http-client/http-client.module';
import { OpenweatherModule } from './openweather/openweather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
    OgmaModule.forRoot({
      service: {
        color: true,
        json: true,
        application: 'openweather-api-demo',
      },
      interceptor: {
        http: ExpressParser,
        ws: false,
        gql: false,
        rpc: false,
      },
    }),
    CacheModule.register({
      isGlobal: true,
      store: filesystemStore,
      path: '.cache',
      subdirs: true,
      zip: true,
    }),
    HttpClientModule,
    OpenweatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
