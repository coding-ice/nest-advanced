import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IceService } from './ice.service';
import { UsersModule } from './users/users.module';
import { HostController } from './host.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, HostController],
  providers: [AppService, IceService],
})
export class AppModule {}
