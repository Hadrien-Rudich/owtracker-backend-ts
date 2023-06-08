import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import userRouter from './routes/users/users';
import heroRouter from './routes/heroes/heroes';
import mapRouter from './routes/maps/maps';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('dotenv').config();

// const historyRouter = require("./routes/users/history");
// const profileRouter = require("./routes/users/profiles");
// const mapTypeRouter = require("./routes/maps/types");
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
// app.use('/history', historyRouter);
// app.use('/profiles', profileRouter);
// app.use('/types', mapTypeRouter);
// app.use('/roles', heroRoleRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
