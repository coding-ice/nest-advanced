import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  SetMetadata,
  UseGuards,
  Headers,
  Ip,
  Session,
  Render,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersGuardGuard } from 'src/users-guard.guard';

@Controller('users')
@SetMetadata('roles', ['users'])
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @SetMetadata('roles', ['admin'])
  @UseGuards(UsersGuardGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Get('head')
  getHead(
    @Headers('Accept') accept: string,
    @Headers() headers: Record<string, any>,
  ) {
    console.log(accept);
    console.log('------');
    console.log(headers);
    return 'head';
  }

  @Get('ip')
  @HttpCode(200)
  getIp(@Ip() ip: string) {
    return ip;
  }

  @Get('session')
  getSession(@Session() session) {
    console.log(session);
    if (!session.count) {
      session.count = 0;
    }
    return `session: ${++session.count}`;
  }

  @Get('profile')
  @Render('profile')
  getProfile() {
    return { name: 'ice', age: 25 };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
