/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes';
import cors from 'cors';

require('dotenv').config();

const app = express();
const PORT = 3000;

const mongoCon = process.env.MONGO_CON;

mongoose.connect(`${mongoCon}`, () => {
  console.log('connected to mongo');
});

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`🚀 - Running at ${PORT}`);
});
