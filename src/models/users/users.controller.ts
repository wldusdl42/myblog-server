import { Controller, Get, UseFilters } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    users(): string {
        return 'users';
      }
}
