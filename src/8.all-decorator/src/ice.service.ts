import { Injectable } from '@nestjs/common';

@Injectable()
export class IceService {
  getName() {
    return 'ice';
  }
}
