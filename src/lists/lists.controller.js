import { createListService } from './lists.service.js';

export const createListController = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const list = await createListService(name, icon);

    res.status(201).send({ message: 'created', list: list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
