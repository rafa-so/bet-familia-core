import { Module } from '@nestjs/common';
import { HealthCheckontroller } from './controllers/healthcheck.controller';

@Module({
  imports: [],
  controllers: [HealthCheckontroller],
  providers: [],
})
export class HealthCheckModule {}
