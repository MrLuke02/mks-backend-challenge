import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
export class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @BeforeInsert()
    generateUuid(): void {
        this.id = uuid()
    }

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

}
