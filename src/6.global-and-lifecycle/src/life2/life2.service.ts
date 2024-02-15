import { Injectable } from '@nestjs/common';
import { CreateLife2Dto } from './dto/create-life2.dto';
import { UpdateLife2Dto } from './dto/update-life2.dto';

@Injectable()
export class Life2Service {
  create(createLife2Dto: CreateLife2Dto) {
    return 'This action adds a new life2';
  }

  findAll() {
    return `This action returns all life2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} life2`;
  }

  update(id: number, updateLife2Dto: UpdateLife2Dto) {
    return `This action updates a #${id} life2`;
  }

  remove(id: number) {
    return `This action removes a #${id} life2`;
  }
}
