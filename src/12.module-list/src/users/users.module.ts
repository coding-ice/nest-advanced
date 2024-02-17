import { Module, forwardRef } from '@nestjs/common';
import { OrderModule } from 'src/order/order.module';

@Module({
  imports: [forwardRef(() => OrderModule)],
})
export class UsersModule {}
