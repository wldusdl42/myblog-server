import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User)
        private loginsRepository: Repository<User>,
    ) {}

    private user_info = {};

    getAll() {
        // return this.user_info;
        return this.loginsRepository.find();
    }

    getLoginInfo(loginData: LoginDto) {
        return this.user_info = {"user_id": loginData.user_id, user_password: loginData.user_password};
    }
}
