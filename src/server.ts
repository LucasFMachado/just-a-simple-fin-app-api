import 'reflect-metadata';

import cors from 'cors';
import express from 'express';

import createConnection from './shared/database';

createConnection();
const app = express();

app.use(cors());

app.use(express.json());

app.listen(3333, () => console.log('Server is running!'));
