import "reflect-metadata"

import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import helmet from 'helmet'
import cors from 'cors'

import { createConnection } from "typeorm"
import indexRouter from './routes'

// Carrega configurações de ambiente
dotenv.config()

const port = Number.parseInt(process.env['SERVER_PORT'])
if (!port)
  throw new Error('Porta não definida. Verifique se o arquivo ".env" possui o parâmetro SERVER_PORT.')

const env = process.env.NODE_ENV
if (!env)
  throw new Error('Ambiente não definido. Verifique se o arquivo ".env" possui o parâmetro NODE_ENV')

// Conexão do TypeORM: conecta primeiro ao banco
// para depois inicializar o Express
createConnection().then(async () => {
  
  // Middlewares
  const app = express() 
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(logger('dev'))
  app.use(cookieParser())
  app.use(helmet())
  app.use(cors({
    origin: process.env.ORIGIN_URL,
    preflightContinue: true
  }))
  
  // Routes
  app.use('/api', indexRouter)
  
  // Inicialização
  app.listen(port, () => console.log(`Subindo na porta: ${port}`))

}).catch(error => console.error("TypeORM connection error: ", error));