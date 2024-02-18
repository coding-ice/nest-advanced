import { DynamicModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

// @Module({
//   controllers: [UsersController],
//   providers: [UsersService],
// })

export class UsersModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: UsersModule,
      controllers: [UsersController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        UsersService,
      ],
    };
  }
}
