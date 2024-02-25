import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  // constructor(private appService: AppService) {}
  @Inject(AppService) private appService: AppService;

  use(req: Request, res: Response, next: () => void) {
    console.log('before');
    console.log(this.appService.getHello());
    next();
    console.log('after');
  }
}
