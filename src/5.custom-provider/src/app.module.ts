import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  // providers: [AppService],
  providers: [
    {
      provide: 'app_service',
      useClass: AppService,
    },
    {
      provide: 'person',
      // useExisting: 'personxxx',
      useValue: {
        name: 'ice',
        age: 25,
      },
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'panda',
          desc: 'i am a bear',
        };
      },
    },
    {
      provide: 'person3',
      useFactory(person: { name: string }, appServie: AppService) {
        return {
          name: person.name,
          desc: appServie.getHello(),
        };
      },
      inject: ['person', 'app_service'],
    },
    {
      provide: 'person4',
      async useFactory() {
        await new Promise((res) => {
          setTimeout(res, 3000);
        });
        return {
          name: 'quezz',
          desc: 'bear',
        };
      },
    },
  ],
})
export class AppModule {}
