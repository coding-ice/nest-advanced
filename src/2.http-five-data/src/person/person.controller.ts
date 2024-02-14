import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  // 1. query: /api/person/find
  @Get('find')
  findQuery(@Query('name') name: string, @Query('age') age: number) {
    return {
      name,
      age,
    };
  }

  // 2. param: /api/person/:id
  @Get(':id')
  urlParam(@Param('id') id: string) {
    return { id };
    // return this.personService.findOne(+id);
  }

  // 3. form urlencoded
  // 4. application/json
  @Post()
  urlLencoded(@Body() createPersonDto: CreatePersonDto) {
    return { ...createPersonDto };
  }

  // 5. form data
  @Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  fileUpload(@Body() cpd: CreatePersonDto, @UploadedFiles() files: Array<any>) {
    console.log(files);
    return {
      ...cpd,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personService.remove(+id);
  }
}
