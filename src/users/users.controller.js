'use strict';

import { getAllUsersService } from './users.service.js';

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
