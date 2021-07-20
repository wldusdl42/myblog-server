import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
    private user_info = {};

    getAll() {
        return this.user_info;
    }

    getLoginInfo(loginData: LoginDto) {
        return this.user_info = {"user_id": loginData.user_id, user_password: loginData.user_password};
    }
}
