import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { S1Service } from './s1.service';
import { S2Service } from './s2.service';

@Module({
  imports: [UsersModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, S1Service, S2Service],
})
export class AppModule {}
