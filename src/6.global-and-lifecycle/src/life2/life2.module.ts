import { Module, OnApplicationShutdown } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { Life2Service } from './life2.service';
import { Life2Controller } from './life2.controller';

@Module({
  controllers: [Life2Controller],
  providers: [Life2Service],
})
export class Life2Module implements OnApplicationShutdown {
  constructor(private moduleRef: ModuleRef) {}

  onApplicationShutdown(signal?: string) {
    const life2Service = this.moduleRef.get<Life2Service>(Life2Service);

    console.log('moduleRef:', life2Service.findAll());
  }
}
