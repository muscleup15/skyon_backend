import express from 'express';
import responseTime from 'response-time';
import { config } from './config.js';
import { user } from './data/data.js';
import { sequelize } from './db/database.js';

const app = express();
app.use(express.json());

app.use(
  responseTime((req, res, time) => {
    console.log(`----------------------------------------`);
    console.log(`new request: ${req.originalUrl}`);
    console.log(`${req.method} ${req.url} ${time}ms`);
    console.log(`headers: ${JSON.stringify(req.headers)}`);
    console.log(`body: ${JSON.stringify(req.body)}`);
    console.log(`query: ${JSON.stringify(req.query)}`);
    console.log(`params: ${JSON.stringify(req.params)}`);
    console.log(`----------------------------------------`);
  })
);
app.use((req, res, next) => {
  return res.status(404).send('Not Found');
});
app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

sequelize.sync().then(
  app.listen(config.host.port, () => {
    console.log(`Example app listening on port ${config.host.port}`);
  })
);
