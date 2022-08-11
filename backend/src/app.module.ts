import { Module } from '@nestjs/common';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { UserController } from './system/user.controller';
import { UserService } from './system/user.service';

@Module({
  imports: [],
  controllers: [SystemController, UserController],
  providers: [SystemService, UserService],
})
export class AppModule {}
