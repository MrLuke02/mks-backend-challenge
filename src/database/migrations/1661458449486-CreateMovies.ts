import { MigrationInterface, QueryRunner } from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateMovies1661458449486 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "movies",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "releaseDate",
                    type: "varchar"
                }]

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("movies");
    }

}
