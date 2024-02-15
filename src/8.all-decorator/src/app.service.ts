import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(private readonly usersService: UsersService) {}
  getHello(): string {
    console.log(this.usersService.findAll());
    return 'Hello World!';
  }
}
