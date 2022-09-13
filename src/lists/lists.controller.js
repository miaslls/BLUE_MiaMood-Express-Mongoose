import { createListService, getAllListsService } from './lists.service.js';

// 📌 CREATE

export const createListController = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const list = await createListService(name, icon);

    res.status(201).send({ message: 'created', list: list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAllListsController = async (req, res) => {
  try {
    const lists = await getAllListsService();

    res.send({ lists: lists });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
