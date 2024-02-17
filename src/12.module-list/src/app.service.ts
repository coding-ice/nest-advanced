import { Injectable } from '@nestjs/common';
import { S1Service } from './s1.service';
import { S2Service } from './s2.service';

@Injectable()
export class AppService {
  constructor(
    private s1: S1Service,
    private s2: S2Service,
  ) {}
  getHello(): string {
    // return this.s1.s1Info();
    return this.s2.s3Info();
    // return 'Hello World!';
  }
}
