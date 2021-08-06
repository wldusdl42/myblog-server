import { Controller, Get, Post, Body, UseFilters, Param, Request } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
    @Get()
    users(): string {
      return 'users';
    }

    @Get('findUser')
    findUser(@Request() req) {
      console.log("req : ", req.body.id);
      return this.userService.findUser(req.body.id);
    }

    @Post('signUp')
    signUp(@Body() newUser: Object) {
      return this.userService.signUp(newUser);
    }
}
