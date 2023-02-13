import { MigrationInterface, QueryRunner } from "typeorm";

export class createClients1676244220509 implements MigrationInterface {
    name = 'createClients1676244220509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "contacts_client_id_fkey"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "data_de_registro"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "data_de_registro" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "contacts_email_key"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "contacts_telefone_key"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "data_de_registro"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "data_de_registro" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "data_de_registro"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "data_de_registro" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "contacts_telefone_key" UNIQUE ("telefone")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "contacts_email_key" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "data_de_registro"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "data_de_registro" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "contacts_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("client_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
