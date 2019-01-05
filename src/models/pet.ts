import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Dono from './dono';
import TipoPet from './tipoPet';

@Entity({ name: 'tb_pet' })
export default class Pet {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50, nullable: false })
  nome: string

  @Column({ nullable: false })
  ativo: boolean

  @ManyToOne(type => TipoPet, { nullable: false, eager: true })
  @JoinColumn({ name: 'id_tipo_pet' })
  tipo: TipoPet

  @ManyToOne(type => Dono, { nullable: false, eager: true })
  @JoinColumn({ name: 'id_dono' })
  dono: Dono
}