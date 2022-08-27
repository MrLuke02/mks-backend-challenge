import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from '../../entities/user';
const md5 = require('md5')

@Injectable()
export class UsersService {


    private repo = getRepository(User);

    async create(user: User) {
        const savedUser = this.repo.create(user);
        const result = await this.repo.save(savedUser)
        return result;
    }

    async getAll() {
        const result = await this.repo.find()
        if (!result) {
            throw new Error("Users not found")
        }
        return result;
    }

    async getById(id: string) {
        const result = await this.repo.findOne({ where: { id } })
        if (!result) {
            throw new Error("User not found")
        }
        return result;
    }

    async login(name: string, password: string) {
        const result = await this.repo.findOne({ where: { name, password: md5(password) } })
        if (!result) {
            throw new Error("User not found")
        }
        return result;
    }

    async update(user: User) {
        let originalUser = await this.getById(user.id);
        if (originalUser) {

            originalUser.name = originalUser.name == user.name ? originalUser.name : user.name
            originalUser.password = originalUser.password == user.password ? originalUser.password : user.password
            await this.repo.update(user.id, user);
            const updatedUser = await this.getById(user.id);
            return updatedUser;
        }

        throw new Error("User not found")

    }

    delete(id: string) {
        let originalUser = this.getById(id);
        if (!originalUser) {
            throw new Error("User not found")
        }
        this.repo.delete(id)
        return "Success"
    }
}
