import { OgmaModule } from '@ogma/nestjs-module';

import { Module } from '@nestjs/common';

import { HttpClientService } from './http-client.service';

@Module({
  imports: [OgmaModule.forFeature(HttpClientService)],
  providers: [HttpClientService],
  exports: [HttpClientService],
})
export class HttpClientModule {}
