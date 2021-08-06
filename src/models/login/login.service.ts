import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { UserDto } from '../users/dto/user.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class LoginService {
    constructor(
        @InjectRepository(User)
        private loginsRepository: Repository<User>,
    ) {}

    private user_info = {};

    getAll() {
        return this.loginsRepository.find({"id": "user1"});
    }

    getLoginInfo(loginData: LoginDto) {
        return this.user_info = {"user_id": loginData.id, user_password: loginData.passwd};
    }

    async addUser() {
        var user = new User();
        user.id = 'b';
        user.passwd = '1234';
        user.token = '';
        return await this.loginsRepository.insert(user);
    }
}
