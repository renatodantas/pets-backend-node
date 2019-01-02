import { Router, Request, Response, NextFunction } from 'express'
import { getManager } from 'typeorm';
import Dono from '../models/dono';

const router = Router()

/* GET donos */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const donoRepository = getManager().getRepository(Dono)
  const donos:Dono[] = await donoRepository.find()
  console.log('donos encontrados:', donos)
  res.json(donos)
})

/* GET dono by ID */
router.get('/:id', (req: Request, res: Response) => {
  res.status(404).send('Dono não encontrado')
})

export default router