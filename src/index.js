import express from 'express';
import cors from 'cors';
import databaseConnection from './database/dbConnection.js';
import 'dotenv/config';

// import authRoute from './auth/auth.route.js';
// import usersRoute from './users/users.route.js';
// import swaggerRoute from './swagger/swagger.route.js';

import moodsRoute from './moods/moods.route.js';
import listsRoute from './lists/lists.route.js';
import listEntriesRoute from './lists/listEntries/listEntries.route.js';

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());

// app.use('/auth', authRoute);
// app.use('/users', usersRoute);
// app.use('/api-docs', swaggerRoute);

app.use('/moods', moodsRoute);
app.use('/lists', listsRoute);
app.use('/list-entries', listEntriesRoute);

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
