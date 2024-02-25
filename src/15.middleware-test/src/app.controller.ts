import { Controller, Get, Next, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/h1')
  getHello1(): string {
    return this.appService.getHello();
  }

  @Get('/h2')
  getHello2(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(@Next() next): string {
    next();
    return 'ice';
  }

  @Get('users')
  getUsers2(): string {
    return 'panda2';
  }
}
