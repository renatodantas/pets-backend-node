import {MigrationInterface, QueryRunner} from "typeorm";

export class InserirDonos1546442677597 implements MigrationInterface {

    private donos = ['Renato', 'Marcelo', 'Henrique'];

    public async up(queryRunner: QueryRunner): Promise<any> {
        this.donos.forEach(dono => 
            queryRunner.query(`INSERT INTO tb_dono (nome) VALUES ('${dono}')`)
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        this.donos.forEach(dono => 
            queryRunner.query(`DELETE FROM tb_dono WHERE nome = '${dono}'`)
        )
    }

}