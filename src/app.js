import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/public/index.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', indexRouter);
app.use(errorHandler);
app.listen(() => {
    console.log("Server is running in port " + process.env.PORT);
  });
  

export default app;
