import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("movies")
export class Movie {
    @PrimaryColumn()
    id: string;

    @Column()
    name: String;

    @Column()
    description: String;

    @Column()
    releaseDate: String;

    @BeforeInsert()
    generateUuid(): void {
        this.id = uuid()
    }

    constructor(name, description, releaseDate) {
        this.name = name;
        this.description = description;
        this.releaseDate = releaseDate;
    }

}
