'use strict';

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from './database/dbConnection.js';
// import usersRoute from './users/users.route';
// import authRoute from './auth/auth.route.js';
// import swaggerRoute from './swagger/swagger.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

databaseConnection();

app.use(cors());
app.use(express.json());

// app.use('/users', usersRoute);
// app.use('/auth', authRoute);
// app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
