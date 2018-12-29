export interface Pet {
  
  id: number
  nome: string
  tipo: TipoPet
  
}

export enum TipoPet {
  CACHORRO = "CACHORRO",
  GATO     = "GATO",
  PASSARO  = "PASSARO"
}