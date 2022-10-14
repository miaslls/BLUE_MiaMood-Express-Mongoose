'use strict';

import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  getUserByUsernameService,
  deleteUserService,
} from './users.service.js';

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

// 📌 DELETE

export const deleteUserController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const userById = await getUserByIdService(idParam);

    if (!userById) {
      return res.status(404).send({ message: 'not found' });
    }

    await deleteUserService(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
