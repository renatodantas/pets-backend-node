import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"
import { TableUnique } from "typeorm/schema-builder/table/TableUnique"

export class CreateTablePets1546693780545 implements MigrationInterface {
    
    private readonly tbPets = new Table({
        name: 'tb_pet',
        columns: [
            { name: "id", type: "int", isPrimary: true, isGenerated: true },
            { name: "nome", type: "varchar", length: '50', isNullable: false },
            { name: "ativo", type: "bool", default: true, isNullable: false },
            { name: "id_tipo_pet", type: "int", isNullable: false },
            { name: "id_dono", type: "int", isNullable: false }
        ]
    })
    private readonly fkDono = new TableForeignKey({
        name: 'fk_pet_dono',
        columnNames: ['id_dono'],
        referencedTableName: 'tb_dono',
        referencedColumnNames: ['id']
    })
    private readonly fkTipoPet = new TableForeignKey({
        name: 'fk_pet_tipo',
        columnNames: ['id_tipo_pet'],
        referencedTableName: 'tb_tipo_pet',
        referencedColumnNames: ['id']
    })
    private readonly ukPets = new TableUnique({ name: 'uk_pet',  columnNames: ['nome', 'id_tipo_pet', 'id_dono'] })
    private readonly pets = [
        { nome: 'Sarugo',    tipo: 'Cachorro', dono: 'Renato' },
        { nome: 'Maneta',    tipo: 'Gato',     dono: 'Renato' },
        { nome: 'Calopsita', tipo: 'Pássaro',  dono: 'Henrique' },
        { nome: 'Luna',      tipo: 'Cachorro', dono: 'Henrique'},
        { nome: 'Salém',     tipo: 'Gato',     dono: 'Marcelo' },
        { nome: 'Belinha',   tipo: 'Cachorro', dono: 'Marcelo' },
    ]

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.tbPets, true)
        await queryRunner.createForeignKeys(this.tbPets, [ this.fkDono, this.fkTipoPet ])
        await queryRunner.createUniqueConstraint(this.tbPets, this.ukPets)
        for (const pet of this.pets) {
            await queryRunner.query(`
                INSERT INTO tb_pet (nome, id_tipo_pet, id_dono) VALUES (
                    '${pet.nome}', 
                    (SELECT id FROM tb_tipo_pet WHERE descricao = '${pet.tipo}'), 
                    (SELECT id FROM tb_dono WHERE nome = '${pet.dono}'))`)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.tbPets, true, true, true)
    }

}
