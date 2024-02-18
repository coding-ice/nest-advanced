import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { ConfigurableModuleClass } from './order.module.definition';

@Module({
  controllers: [OrderController],
})
export class OrderModule extends ConfigurableModuleClass {}
