import express from 'express';
import cors from 'cors';
import databaseConnection from './database/dbConnection.js';
import 'dotenv/config';

// import authRoute from './auth/auth.route.js';
// import usersRoute from './users/users.route.js';
// import swaggerRoute from './swagger/swagger.route.js';

import moodsRoute from './moods/moods.route.js';
import listsRoute from './lists/list.route.js';
import listCategoriesRoute from './lists/listCategories/listCategory.route.js';
import listEntriesRoute from './lists/listEntries/listEntry.route.js';

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
app.use('/list-categories', listCategoriesRoute);
app.use('/list-entries', listEntriesRoute);

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
