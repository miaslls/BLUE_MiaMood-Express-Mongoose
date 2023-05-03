import express from 'express';
import cors from 'cors';
import databaseConnection from './database/dbConnection.js';
import 'dotenv/config';

import moodsRoute from './moods/moods.route.js';

const app = express();
const port = process.env.PORT || 8080;

databaseConnection();

app.use(cors());
app.use(express.json());

app.use('/moods', moodsRoute);

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
