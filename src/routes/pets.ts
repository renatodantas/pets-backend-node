import express from 'express'

const router = express.Router()

// fake pets
const pets = [
  { id: 1, nome: 'Sarugo', tipo: 'CACHORRO' },
  { id: 2, nome: 'Maneta', tipo: 'GATO' },
  { id: 3, nome: 'Loro', tipo: 'PASSARO' },
]

/* GET pets */
router.get('/', (req, res, next) => {
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