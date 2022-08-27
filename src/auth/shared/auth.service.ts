import { Injectable } from "@nestjs/common";
import { UsersService } from "../../user/shared/user.service";
const md5 = require('md5')

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {

    }

    async validateUser(name: string, password: string) {
        console.log("asd");

        const user = await this.userService.login(name, md5(password));
        if (user && user.password === password) {
            const { id, name, password } = user;
            return { id, name, password };
        }
    }
}