import { PartialType } from '@nestjs/mapped-types';
import { CreateLife1Dto } from './create-life1.dto';

export class UpdateLife1Dto extends PartialType(CreateLife1Dto) {}
