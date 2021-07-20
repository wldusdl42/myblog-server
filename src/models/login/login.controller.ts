import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get()
    getAll() {
        return this.loginService.getAll();
    }
    @Post()
    create(@Body() loginData: LoginDto) {
        return this.loginService.getLoginInfo(loginData);
    }
}
