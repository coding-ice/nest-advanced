import { Injectable } from '@nestjs/common';
import { S2Service } from './s2.service';

@Injectable()
export class S1Service {
  constructor(private readonly s2Service: S2Service) {}
  s1Info() {
    return 's1' + this.s2Service.s2Info();
  }
}
