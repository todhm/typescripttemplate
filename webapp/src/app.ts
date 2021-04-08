import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cors from 'cors';
import {settings} from './appsettings';
import routes from './routes/index';
import {dbCreateConnection} from './db/createConnection';
import { errorHandler } from './middleware/errorHandler';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());
app.use('/', routes);
app.use(errorHandler);
(async () => {
  await dbCreateConnection(settings.dbConfig);
})();  

export default app;