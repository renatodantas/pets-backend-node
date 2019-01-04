import { NextFunction, Request, Response, Router } from 'express';
import { Pet } from '../models/pet';
import { getManager } from 'typeorm';

const router = Router()

/* GET pets */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const pets:Pet[] = await getManager()
    .createQueryBuilder(Pet, 'p')
    .innerJoinAndSelect('p.dono', 'd')
    .getMany()
  
  if (process.env.NODE_ENV === 'dev')
    console.log('pets encontrados:', pets.length)

  res.json(pets)
})

/* GET pet by ID */
router.get('/:id(\\d+)', async (req, res) => {
  const pet:Pet = await getManager()
    .createQueryBuilder(Pet, 'p')
    .innerJoinAndSelect('p.dono', 'd')
    .whereInIds(req.params.id)
    .getOne()
  
  if (process.env.NODE_ENV === 'dev')
    console.log(`pet por id ${req.params.id}:`, pet)

  return pet ? 
    res.json(pet) :
    res.status(404).send('Pet não encontrado')
})

export default router