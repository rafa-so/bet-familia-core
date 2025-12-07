import { Controller, Get, HttpCode } from "@nestjs/common";

// @ApiTags('health')
@Controller()
export class HealthCheckontroller {
  @Get()
  @HttpCode(200)
  getHealth(): string {
    return 'OK';
  }
}