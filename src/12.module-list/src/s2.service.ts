import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { S1Service } from './s1.service';

@Injectable()
export class S2Service {
  constructor(
    @Inject(forwardRef(() => S1Service)) private readonly s1Service: S1Service,
  ) {}
  s2Info() {
    return 's2';
  }
  s3Info() {
    return this.s1Service.s1Info() + 's3';
  }
}
