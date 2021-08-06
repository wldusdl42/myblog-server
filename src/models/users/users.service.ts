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

    async findUser(user_id: string): Promise<any> {
        return this.userRepository.find({"id": user_id})
    }

    async signUp(user: any) {
        var newUser = new User();
        newUser.id = user.id;
        newUser.passwd = user.passwd;
        newUser.token = user.token;
        return await this.userRepository.insert(user);
    }
}
