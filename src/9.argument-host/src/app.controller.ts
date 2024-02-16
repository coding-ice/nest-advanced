import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { FException } from './FException';
import { F1Filter } from './f1.filter';
import { G1Guard } from './g1.guard';
import { Roles } from './roles.decorator';
import { Role } from './role';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseFilters(F1Filter)
  @Get()
  @UseGuards(G1Guard)
  @Roles(Role.Admin)
  getHello(): string {
    // throw new FException('ice', 25);
    return this.appService.getHello();
  }
}
