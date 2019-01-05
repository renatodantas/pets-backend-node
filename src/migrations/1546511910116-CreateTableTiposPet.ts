import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { TableUnique } from "typeorm/schema-builder/table/TableUnique";

export class CreateTableTiposPet1546511910116 implements MigrationInterface {

    private readonly tbTipoPet = new Table({
        name: 'tb_tipo_pet',
        columns: [
            { name: "id", type: "int", isPrimary: true, isGenerated: false },
            { name: "descricao", type: "varchar", length: '20', isNullable: false }
        ]
    })
    private readonly ukTipoPet = new TableUnique({ name: 'uk_tipo_pet', columnNames: ['descricao' ] })
    private readonly tiposPet = [
        { id: 1, descricao: 'Cachorro' },
        { id: 2, descricao: 'Gato' },
        { id: 3, descricao: 'Pássaro' }
    ]

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.tbTipoPet, true)
        await queryRunner.createUniqueConstraint(this.tbTipoPet, this.ukTipoPet)
        for (const tipo of this.tiposPet) {
            await queryRunner.query(`INSERT INTO tb_tipo_pet VALUES (${tipo.id}, '${tipo.descricao}')`)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.tbTipoPet, true, true, true)
    }

}
