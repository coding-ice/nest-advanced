import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersInterceptor } from './users.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchOrrorTestInterceptor } from './catch-orror-test.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(UsersInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  @UseInterceptors(MapTestInterceptor)
  getUserName() {
    return 'ice';
  }

  @Get('order')
  @UseInterceptors(TapTestInterceptor)
  getOrder() {
    return 'clothes';
  }

  @Get('error')
  @UseInterceptors(CatchOrrorTestInterceptor)
  getError() {
    throw new Error('hhhhhh');
  }

  @Get('timeout')
  @UseInterceptors(TimeoutInterceptor)
  getTimeout() {
    return new Promise((res) => {
      setTimeout(() => {
        res('ice');
      }, 4000);
    });
  }

  @Get('globalout')
  getGlobal() {
    return new Promise((res) => {
      setTimeout(() => {
        res('globalout');
      }, 4000);
    });
  }
}
