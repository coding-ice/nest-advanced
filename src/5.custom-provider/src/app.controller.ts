import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

type Person = {
  name: string;
  age: number;
};

@Controller()
export class AppController {
  @Inject('app_service') private readonly appService: AppService;
  @Inject('person') private readonly person: Person;
  @Inject('person2') private readonly person2: Person;
  @Inject('person3') private readonly person3: Person;
  @Inject('person4') private readonly person4: Person;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/person')
  getPerson(): string {
    console.log(this.person4);
    console.log(this.person);
    console.log(this.person2);
    console.log(this.person3);
    return 'person';
  }
}
