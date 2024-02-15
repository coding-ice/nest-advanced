import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { Life1Service } from './life1.service';
import { Life1Controller } from './life1.controller';

@Module({
  controllers: [Life1Controller],
  providers: [Life1Service],
})
export class Life1Module implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('life1 module m init');
  }

  onApplicationBootstrap() {
    console.log('life1 app module bootstrap');
  }
}
