import { IsInt } from 'class-validator';

export class CreateUserDto {
  name: string;
  pwd: string;
  @IsInt({
    message(args) {
      return `${args.property} is not a int number`;
    },
  })
  age: number;
}
