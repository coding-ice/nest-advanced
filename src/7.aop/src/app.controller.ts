import {
  Controller,
  Get,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilte } from './test.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handle');
    return this.appService.getHello();
  }

  @Get('xxx')
  @UseGuards(LoginGuard)
  xxx() {
    console.log('xxx...');
    return 'xxx';
  }

  @Get('hhh')
  @UseInterceptors(TimeInterceptor)
  hhh() {
    console.log('hhh...');
    return 'hhh';
  }

  @Get('count')
  @UseFilters(TestFilte)
  getCount(@Query('count', ValidatePipe) count: number) {
    return count + 1;
  }
}
