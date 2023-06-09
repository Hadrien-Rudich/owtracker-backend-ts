import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import userRouter from './routes/users/users';
import heroRouter from './routes/heroes/heroes';
import heroRoleRouter from './routes/heroes/heroRoles';
import mapRouter from './routes/maps/maps';
import mapTypeRouter from './routes/maps/mapTypes';
import historyRouter from './routes/history/history';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();

// const historyRouter = require("./routes/users/history");
// const profileRouter = require("./routes/users/profiles");
// const heroRoleRouter = require("./routes/heroes/roles");

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/maps', mapRouter);
app.use('/heroes', heroRouter);
app.use('/user', userRouter);
app.use('/history', historyRouter);
app.use('/maptypes', mapTypeRouter);
// app.use('/profiles', profileRouter);
app.use('/heroroles', heroRoleRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
