import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableDono1546186083594 implements MigrationInterface {

    private tableDono = new Table({
        name: 'tb_dono',
        columns: [
            { name: "id", type: "serial", isPrimary: true },
            { name: "nome", type: "varchar", length: '50', isNullable: false, isUnique: true },
            { name: "ativo", type: "bool", default: true, isNullable: false }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.tableDono, true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.tableDono)
    }

}
