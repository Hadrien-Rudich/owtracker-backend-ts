import express from 'express';
import { config } from './configuration/config';
import router from './routes/router';
import { apiErrorHandler } from './middlewares/apiErrorHandler';
import { accessControl } from './middlewares/accessControl';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(accessControl);
app.use(router);
app.use(apiErrorHandler);

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`);
});
