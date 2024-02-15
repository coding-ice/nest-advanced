import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  // imports: [UsersModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
