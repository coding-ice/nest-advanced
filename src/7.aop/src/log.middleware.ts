import { Injectable, NestMiddleware } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  private readonly appService: AppService;

  use(req: any, res: any, next: () => void) {
    console.log('before2', req.url);
    next();
    console.log('after2');
  }
}
