import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';
import { IceService } from './ice.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly iceService: IceService,
  ) {}

  @Optional()
  @Inject('option')
  private option: any;

  @Get()
  getHello(): string {
    console.log(this.iceService.getName());
    return this.appService.getHello();
  }
}
