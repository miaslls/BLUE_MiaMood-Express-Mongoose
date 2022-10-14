'use strict';

import bcrypt from 'bcryptjs';
import { loginService, generateToken } from './auth.service.js';

const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await loginService(username);

    if (!user) {
      return res.status(400).send({ message: 'invalid login info' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).send({ message: 'invalid login info' });
    }

    const token = generateToken(user.id);

    res.send({
      token: token,
      user: { id: user.id, username: user.username },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default loginController;
