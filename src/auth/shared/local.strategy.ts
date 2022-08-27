import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
const md5 = require('md5');

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            nameField: 'name',
            passwordField: 'password'
        })
    }

    async validate(name: string, password: string) {
        const user = await this.authService.validateUser(name, password);
        if (!user) {
            ;
        }
        return { name, password };
    }
}