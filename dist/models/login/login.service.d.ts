import { LoginDto } from './dto/login.dto';
export declare class LoginService {
    private user_info;
    getAll(): {};
    getLoginInfo(loginData: LoginDto): {
        user_id: string;
        user_password: string;
    };
}
