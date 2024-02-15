import { PartialType } from '@nestjs/mapped-types';
import { CreateLife2Dto } from './create-life2.dto';

export class UpdateLife2Dto extends PartialType(CreateLife2Dto) {}
