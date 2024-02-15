import {
  Injectable,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';
import { CreateLife1Dto } from './dto/create-life1.dto';
import { UpdateLife1Dto } from './dto/update-life1.dto';

@Injectable()
export class Life1Service implements OnModuleInit, OnApplicationBootstrap {
  onModuleInit() {
    console.log('life1 module service init');
  }

  onApplicationBootstrap() {
    console.log('life1 app service bootstrap');
  }

  create(createLife1Dto: CreateLife1Dto) {
    return 'This action adds a new life1';
  }

  findAll() {
    return `This action returns all life1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} life1`;
  }

  update(id: number, updateLife1Dto: UpdateLife1Dto) {
    return `This action updates a #${id} life1`;
  }

  remove(id: number) {
    return `This action removes a #${id} life1`;
  }
}
