import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import CONFIG from './config';

const app = express();

app.use(helmet);
app.use(morgan('tiny'));
app.use(bodyParser());

try {
  app.listen(CONFIG.API_PORT, () => {
    console.log(`Listening on port ${CONFIG.API_PORT}`);
  });
} catch (err) {
  console.log('Error starting server: ', err);
}
