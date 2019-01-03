import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { TableUnique } from "typeorm/schema-builder/table/TableUnique";

export class CreateTableDono1546186083594 implements MigrationInterface {

    private readonly tbDono = new Table({
        name: 'tb_dono',
        columns: [
            { name: "id", type: "serial", isPrimary: true },
            { name: "nome", type: "varchar", length: '50', isNullable: false },
            { name: "ativo", type: "bool", default: true, isNullable: false }
        ]
    })

    private readonly ukDono = new TableUnique({
        name: 'uk_dono', columnNames: ['nome']
    })

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.tbDono, true)
        await queryRunner.createUniqueConstraint(this.tbDono, this.ukDono)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropUniqueConstraint(this.tbDono, this.ukDono)
        await queryRunner.dropTable(this.tbDono)
    }

}
