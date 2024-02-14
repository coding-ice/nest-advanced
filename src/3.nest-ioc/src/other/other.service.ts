import { Injectable } from '@nestjs/common';

@Injectable()
export class OtherService {
  getFullname() {
    return 'ice';
  }
}
