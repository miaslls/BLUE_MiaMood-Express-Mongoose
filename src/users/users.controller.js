'use strict';

import {
  getAllUsersService,
  getUserByUsernameService,
  createUserService,
} from './users.service.js';

import { generateToken } from '../auth/auth.service.js';

// 📌 GET ALL

export const getAllUsersController = async (req, res) => {
  try {
    const allUsers = await getAllUsersService();

    if (!allUsers) {
      return res.status(404).send();
    }

    res.send(allUsers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 CREATE

export const createUserController = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({ message: 'incomplete data' });
    }

    const usernameInDb = await getUserByUsernameService(username);

    if (usernameInDb) {
      return res.status(400).send({ message: 'user already exists' });
    }

    const user = await createUserService(req.body);

    res.status(201).send({ user: { id: user.id, username } });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
