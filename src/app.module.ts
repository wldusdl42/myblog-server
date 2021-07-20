import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './models/users/users.module';
import { LoginModule } from './models/login/login.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, LoginModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
