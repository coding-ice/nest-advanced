import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UsersPipe } from './users.pipe';

enum Size {
  BIG = '180',
  SMALL = '165',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(@Query('count', ParseIntPipe) count: string): string {
  //   return count + 1;
  // }

  // @Get()
  // getHello(
  //   @Query(
  //     'count',
  //     // new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
  //     new ParseIntPipe({
  //       exceptionFactory(msg) {
  //         console.log(msg);
  //         throw new HttpException('必须为数字', HttpStatus.CONFLICT);
  //       },
  //     }),
  //   )
  //   count: string,
  // ): string {
  //   return count + 1;
  // }

  // @Get()
  // getHello(@Query('count', ParseFloatPipe) count: string): string {
  //   return count + 0.1;
  // }

  // @Get('bool')
  // getBool(@Query('bool', ParseBoolPipe) bool: boolean) {
  //   return typeof bool;
  // }

  @Get()
  getHello(
    @Query(
      'array',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    array: number[],
  ): number {
    return array.reduce((prev, cur) => prev + cur, 0);
  }

  @Get('size/:size')
  getSize(@Param('size', new ParseEnumPipe(Size)) size: Size) {
    return size;
  }

  @Get('uuid/:uuid')
  getUuid(@Param('uuid', ParseUUIDPipe) uid: string) {
    return uid;
  }

  @Get('/default')
  getDefault(@Query('d', new DefaultValuePipe('ice')) d: string) {
    return d;
  }

  @Get('custom')
  getCustom(@Query('a', UsersPipe) a: string) {
    return a;
  }
}
