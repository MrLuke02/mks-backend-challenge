import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './shared/user.service';

@Module({
    controllers: [UserController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UserModule {

}
