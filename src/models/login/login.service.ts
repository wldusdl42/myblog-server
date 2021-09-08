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
        return this.loginsRepository.find({"email": "user1"});
    }

    getLoginInfo(loginData: LoginDto) {
        console.log("1111")
        return this.user_info = {"user_id": loginData.id, "user_password": loginData.passwd};
    }

    async addUser() {
        var user = new User();
        user.email = 'b';
        user.passwd = '1234';
        user.retoken = '';
        return await this.loginsRepository.insert(user);
    }
}
