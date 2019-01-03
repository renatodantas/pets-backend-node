import { MigrationInterface, QueryRunner } from "typeorm";
import { TipoPet } from "../models/pet";

export class InserirPets1546511916262 implements MigrationInterface {

    private readonly pets = [
        { nome: 'Sarugo', tipo: TipoPet.CACHORRO, dono: 'Renato' },
        { nome: 'Maneta', tipo: TipoPet.GATO, dono: 'Renato' },
        { nome: 'Calopsita', tipo: TipoPet.PASSARO, dono: 'Henrique' },
        { nome: 'Luna', tipo: TipoPet.CACHORRO, dono: 'Henrique'},
        { nome: 'Salém', tipo: TipoPet.GATO, dono: 'Marcelo' },
        { nome: 'Belinha', tipo: TipoPet.CACHORRO, dono: 'Marcelo' },
    ]
    public async up(queryRunner: QueryRunner): Promise<any> {
        this.pets.forEach(pet => {
            queryRunner.query(`
                INSERT INTO tb_pet (nome, tipo, id_dono) 
                VALUES ('${pet.nome}', '${pet.tipo}', (SELECT id FROM tb_dono WHERE nome = '${pet.dono}'))`)
        })
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        this.pets.forEach(pet => 
            queryRunner.query(`DELETE FROM tb_pet WHERE nome = '${pet.nome}'`)
        )
    }
}
