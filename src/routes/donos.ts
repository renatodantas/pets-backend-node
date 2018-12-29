import { Router, Request, Response, NextFunction } from 'express'

const router = Router()

/* GET donos */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('Donos!');
  res.sendStatus(403);
})

/* GET dono by ID */
router.get('/:id', (req: Request, res: Response) => {
  res.status(404).send('Dono não encontrado')
})

export default router