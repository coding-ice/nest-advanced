import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    UsersModule.register({
      name: 'ice',
      age: 20,
    }),
    // OrderModule.registerAsync({
    //   useFactory: async () => {
    //     await new Promise((res) => setTimeout(res, 3000));

    //     return {
    //       name: 'panda',
    //       age: 20,
    //     };
    //   },
    // }),
    // OrderModule.register({
    //   name: 'ice',
    //   age: 25,
    // }),

    // OrderModule.forRoot({
    //   name: 'ice',
    //   age: 25,
    // }),

    OrderModule.register({
      name: 'ice',
      age: 30,
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
