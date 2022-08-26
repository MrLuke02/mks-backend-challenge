import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '../entities/user';
import { UsersService } from './shared/user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UsersService) {
    }


    @Post()
    async createMovie(@Body() params): Promise<User> {
        const user = new User(params.name, params.password);
        return this.userService.create(user);
    }

    @Get()
    async getAll(): Promise<User[]> {
        console.log("asdf");

        return this.userService.getAll();
    }

    @Get(":id")
    async getById(@Param('id') id): Promise<User> {
        return this.userService.getById(id);
    }

    @Put()
    async updateMovie(@Body() params): Promise<User> {
        const user = new User(params.name, params.password);
        user.id = params.id;
        const newUser = await this.userService.update(user)
        return newUser;
    }
    /*
        @Delete(":id")
        async deleteMovie(@Param('id') id) {
            return this.movieService.delete(id);
        } */
}
