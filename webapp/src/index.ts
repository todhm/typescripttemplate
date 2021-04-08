import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';
import {settings} from './appsettings';
import routes from './routes/index';
import {dbCreateConnection} from './db/createConnection';
import { errorHandler } from './middleware/errorHandler';
import {NotFoundError} from './errors/not-found-error';
import * as core from 'express-serve-static-core';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());
app.use('/', routes);
app.use(errorHandler);
app.listen(5000, () => {
  console.log('Listening on port 5000!!!!!!!!');
});
(async () => {
  await dbCreateConnection(settings.dbConfig);
})();  
export default app;

