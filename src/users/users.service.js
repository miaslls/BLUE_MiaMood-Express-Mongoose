'use strict';

import User from './User.js';

export const createUserService = (body) => User.create(body);

export const getAllUsersService = () => User.find();

export const getUserByIdService = (id) => User.findById(id);

export const getUserByUsernameService = (username) => User.findOne({ username: username });

export const deleteUserService = (id) => User.findByIdAndDelete(id);
