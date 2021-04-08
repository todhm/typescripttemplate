import {MigrationInterface, QueryRunner} from "typeorm";

export class dummy1617848139178 implements MigrationInterface {
    name = 'dummy1617848139178'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "dummy" (
                "id" SERIAL NOT NULL,
                "data" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "UQ_51217deb92be1e30af8e06d33d9" UNIQUE ("data"),
                CONSTRAINT "PK_8a7fd4e47344e8cfa61be2098af" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "dummy"
        `);
    }

}
