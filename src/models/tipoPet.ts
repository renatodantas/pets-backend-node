import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: 'tb_tipo_pet' })
export default class TipoPet {
  
  @PrimaryColumn()
  id: number

  @Column({ length: 20, nullable: false })
  descricao: string

}