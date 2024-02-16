import {
  Controller,
  ExecutionContext,
  Get,
  Headers,
  ParseIntPipe,
  Query,
  UseGuards,
  applyDecorators,
  createParamDecorator,
} from '@nestjs/common';
import { AppService } from './app.service';
import { G1Guard } from './g1.guard';
import { SetRoleType } from './d1.decorator';
import { IceHeaders, IceQuery } from './custom-decorator';
import { Simple } from './simple.decorator';

const getParams = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    console.log(data);
    return 'ice';
  },
);

@Simple()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // @SetRoleType('admin')
  // @UseGuards(G1Guard)
  @ApplyAllDec(undefined, 'staff')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('profile')
  getName(@getParams() c) {
    return c;
  }

  @Get('headers')
  getHeader(@Headers('Accept') h1, @IceHeaders('Accept') h2) {
    console.log(h1);
    console.log(h2);

    return 'headers';
  }

  @Get('query')
  getQuery(@Query('name') name, @IceQuery('age') age) {
    return {
      name,
      age,
    };
  }

  @Get('number')
  getNum(@Query('num', ParseIntPipe) n) {
    console.log(n);
    return n;
  }
}

export function ApplyAllDec(path, roleType) {
  return applyDecorators(Get(path), SetRoleType(roleType), UseGuards(G1Guard));
}
