import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity()
export class Dono extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  nome: string

  @Column()
  ativo: boolean
}