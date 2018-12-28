import express from 'express'

import rootRouter from './root'
import petsRouter from './pets'

const router = express.Router()
router.use('/', rootRouter)
router.use('/pets', petsRouter)

export default router 