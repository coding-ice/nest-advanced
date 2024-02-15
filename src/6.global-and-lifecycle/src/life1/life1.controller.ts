import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { Life1Service } from './life1.service';
import { CreateLife1Dto } from './dto/create-life1.dto';
import { UpdateLife1Dto } from './dto/update-life1.dto';

@Controller('life1')
export class Life1Controller implements OnModuleInit, OnApplicationBootstrap {
  constructor(private readonly life1Service: Life1Service) {}

  onModuleInit() {
    console.log('life1 module controller init');
  }

  onApplicationBootstrap() {
    console.log('life1 app controller bootstrap');
  }

  @Post()
  create(@Body() createLife1Dto: CreateLife1Dto) {
    return this.life1Service.create(createLife1Dto);
  }

  @Get()
  findAll() {
    return this.life1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.life1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLife1Dto: UpdateLife1Dto) {
    return this.life1Service.update(+id, updateLife1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.life1Service.remove(+id);
  }
}
