import { NextFunction, Request, Response, Router } from 'express';
import { Pet } from '../models/pet';
import { getManager } from 'typeorm';

const router = Router()

/* GET pets */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const petRepository = getManager().getRepository(Pet)
  const pets:Pet[] = await petRepository.find()
  
  console.log('pets encontrados:', pets)
  res.json(pets)
})

/* GET pet by ID */
router.get('/:id', async (req, res) => {
  const petRepository = getManager().getRepository(Pet)
  const pet:Pet = await petRepository.findOne(req.params.id)
  
  console.log(`pet por id ${req.params.id}:`, pet)
  return pet ? 
    res.json(pet) :
    res.status(404).send('Pet não encontrado')
})

export default router