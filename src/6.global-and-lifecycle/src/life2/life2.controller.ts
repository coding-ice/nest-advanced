import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Life2Service } from './life2.service';
import { CreateLife2Dto } from './dto/create-life2.dto';
import { UpdateLife2Dto } from './dto/update-life2.dto';

@Controller('life2')
export class Life2Controller
  implements
    OnModuleInit,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly life2Service: Life2Service) {}

  onModuleInit() {
    console.log('life2 controller moduleinit');
  }

  onModuleDestroy() {
    console.log('module destroy');
  }

  beforeApplicationShutdown(signal?: string) {
    console.log('before:', signal);
  }

  onApplicationShutdown(signal?: string) {
    console.log('after', signal);
  }

  @Post()
  create(@Body() createLife2Dto: CreateLife2Dto) {
    return this.life2Service.create(createLife2Dto);
  }

  @Get()
  findAll() {
    return this.life2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.life2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLife2Dto: UpdateLife2Dto) {
    return this.life2Service.update(+id, updateLife2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.life2Service.remove(+id);
  }
}
