import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import indexRouter from './routes';

// Carrega configurações de ambiente
dotenv.config();

// Middlewares
const app = express(); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', indexRouter);

// Inicialização
app.listen(8080, () => console.log('Subindo na porta 8080!'));