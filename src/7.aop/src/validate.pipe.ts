import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (Number.isNaN(parseInt(value))) {
      console.log(metadata);
      throw new BadRequestException(`参数${metadata.data} error`);
    }
    return parseInt(value) * 10;
  }
}
