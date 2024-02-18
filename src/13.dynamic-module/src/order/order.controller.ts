import { Controller, Inject, Get } from '@nestjs/common';
import {
  MODULE_OPTIONS_TOKEN,
  OrderModuleOptions,
} from './order.module.definition';

@Controller('order')
export class OrderController {
  @Inject(MODULE_OPTIONS_TOKEN) private options: OrderModuleOptions;

  @Get()
  getAll() {
    return this.options;
  }
}
