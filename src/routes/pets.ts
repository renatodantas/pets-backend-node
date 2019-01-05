import { NextFunction, Request, Response, Router } from 'express';
import { getManager } from 'typeorm';
import Pet from '../models/pet';

const router = Router()

/* GET pets */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const pets:Pet[] = await getManager().find(Pet)
  
  if (process.env.NODE_ENV === 'dev')
    console.log('pets encontrados:', pets.length)

  res.json(pets)
})

/* GET pet by ID */
router.get('/:id(\\d+)', async (req, res) => {
  const pet:Pet = await getManager().findOne(Pet, req.params.id)
  
  if (process.env.NODE_ENV === 'dev')
    console.log(`pet por id ${req.params.id}:`, pet)

  return pet ? 
    res.json(pet) :
    res.status(404).send('Pet não encontrado')
})

/* GET tiposPet */
// TODO

export default router