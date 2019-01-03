import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";
import { tipoPetValues } from "../models/pet";
import { TableUnique } from "typeorm/schema-builder/table/TableUnique";

export class CreateTablePets1546511910116 implements MigrationInterface {
    
    private readonly tbPets = new Table({
        name: 'tb_pet',
        columns: [
            { name: "id", type: "int", isPrimary: true, isGenerated: true },
            { name: "nome", type: "varchar", length: '50', isNullable: false },
            { name: "ativo", type: "bool", default: true, isNullable: false },
            { name: "tipo", type: "enum", isNullable: false, enum: tipoPetValues() },
            { name: "id_dono", type: "int", isNullable: false }
        ]
    })

    private readonly fkDono = new TableForeignKey({
        name: 'fk_pet_dono',
        columnNames: ['id_dono'],
        referencedTableName: 'tb_dono',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE'
    });

    private readonly ukPets = new TableUnique({
        name: 'uk_pet', 
        columnNames: ['nome', 'tipo', 'id_dono']
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.tbPets, true)
        await queryRunner.createForeignKey(this.tbPets, this.fkDono)
        await queryRunner.createUniqueConstraint(this.tbPets, this.ukPets)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropUniqueConstraint(this.tbPets, this.ukPets)
        await queryRunner.dropForeignKey(this.tbPets, this.fkDono)
        await queryRunner.dropTable(this.tbPets)
    }

}
