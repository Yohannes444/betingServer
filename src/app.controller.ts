import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IpService } from './ip.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ipService: IpService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/getLocalIP')
  getLocalIP() {
    return { localIP: this.ipService.getLocalIP() };
  }
}
