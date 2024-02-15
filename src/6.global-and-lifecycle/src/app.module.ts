import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { Life1Module } from './life1/life1.module';
import { Life2Module } from './life2/life2.module';

@Module({
  imports: [UsersModule, OrderModule, Life2Module, Life1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
