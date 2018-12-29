import express from 'express'

import rootRouter from './root'
import petsRouter from './pets'
import donosRouter from './donos'

const router = express.Router()
router.use('/', rootRouter)
router.use('/pets', petsRouter)
router.use('/donos', donosRouter)

export default router 