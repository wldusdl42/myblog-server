import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    getAll(): {};
    create(loginData: LoginDto): {
        user_id: string;
        user_password: string;
    };
}
