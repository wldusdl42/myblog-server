import { Body, Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get()
    getAll(@Body() loginData: LoginDto) {
        console.log('loginData : ', loginData);
        return this.loginService.getAll();
    }

    @Post()
    create(@Body() loginData: LoginDto) {
        return this.loginService.getLoginInfo(loginData);
    }
    
    @Post('addUser')
    signUp(@Body() Any) {
        console.log('addUser')
        return this.loginService.addUser();
    }
}
