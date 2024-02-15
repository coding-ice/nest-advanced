import { Controller, Get, HostParam, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller({ host: ':host.0.0.1', path: 'aaa' })
export class HostController {
  @Get()
  hi(@HostParam('host') host) {
    return 'hi:' + host;
  }

  @Get('/req')
  getReq(@Req() req: Request) {
    console.log(req);
    return { host: req.hostname, url: req.url };
  }

  @Get('/juejin')
  @Redirect('https://juejin.cn')
  juejin() {}
}
