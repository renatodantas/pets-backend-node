import { NextFunction, Request, Response, Router } from 'express';
import { Pet, TipoPet } from '../models/pet';

const router = Router()

// fake pets
const pets: Array<Pet> = [
  { id: 1, nome: 'Sarugo', tipo: TipoPet.CACHORRO },
  { id: 2, nome: 'Maneta', tipo: TipoPet.GATO },
  { id: 3, nome: 'Loro', tipo: TipoPet.PASSARO },
]

/* GET pets */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json(pets)
})

/* GET pet by ID */
router.get('/:id', (req, res) => {
  const pet = pets.filter(p => p.id == req.params['id'])
  if (pet.length > 0)
    res.json(pet[0])
  else
    res.status(404).send('Pet não encontrado')
})

export default router