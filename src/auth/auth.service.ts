import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/models/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findUser(username);
        if(user && user[0].passwd === pass) {
            const { password, ...result } = user[0];
            return result;
        }
        return null;
    }

    async login(user: any) {
        console.log("user : ", user);
        return {
            access_token: this.jwtService.sign( {email: user.email, name: user.name} ),
            refresh_token: this.jwtService.sign( {num : user.num} )
        }
    }
}