import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async findUser(email: string): Promise<any> {
        return await this.userRepository.find({"email": email})
    }

    async signUp(user: any) {
        var newUser = new User();
        newUser.email = user.email;
        newUser.passwd = user.passwd;
        newUser.retoken = user.retoken;
        return await this.userRepository.insert(user);
    }
}
