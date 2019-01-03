import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import Dono from './dono';

@Entity({ name: 'tb_pet' })
export class Pet {
  
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 50 })
  nome: string

  @Column()
  ativo: boolean

  @Column()
  tipo: TipoPet

  @ManyToOne(type => Dono)
  @JoinColumn({ name: 'id_dono' })
  dono: Dono
}

export enum TipoPet {
  CACHORRO = "CACHORRO",
  GATO     = "GATO",
  PASSARO  = "PASSARO"
}

export function tipoPetValues(): string[] {
  return Object.keys(TipoPet)
}