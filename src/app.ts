import express from 'express';
import { config } from './configuration/config';
import router from './routes/router';
import { apiErrorHandler } from './middlewares/apiErrorHandler';
// import { accessControl } from './middlewares/accessControl';
import cors from 'cors';
import helmet from 'helmet';
import { corsMiddleware } from './configuration/cors';

const app = express();
app.use(corsMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());

// app.use(accessControl);
app.use(router);
app.use(apiErrorHandler);

app.listen(config.port, () => {
  console.log(
    `Overwatch Game Tracker listening at http://localhost:${config.port}`
  );
});
