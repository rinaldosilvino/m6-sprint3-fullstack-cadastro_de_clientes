import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1680391831878 implements MigrationInterface {
    name = 'createTables1680391831878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("client_id" SERIAL NOT NULL, "nome" character varying(120) NOT NULL, "email" character varying(60) NOT NULL, "telefone" character varying(20) NOT NULL, "data_de_registro" TIMESTAMP NOT NULL, CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "UQ_3b8de0d503a04307fec6c4ea9b3" UNIQUE ("telefone"), CONSTRAINT "PK_49e91f1e368e3f760789e7764aa" PRIMARY KEY ("client_id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("contact_id" SERIAL NOT NULL, "nome" character varying(120) NOT NULL, "email" character varying(60) NOT NULL, "telefone" character varying(20) NOT NULL, "data_de_registro" TIMESTAMP NOT NULL, "client_id" integer NOT NULL, CONSTRAINT "PK_b85c417d6af2e06ff6ba8c8234d" PRIMARY KEY ("contact_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
