import { createListCategoryService } from './listCategories.service.js';

// 📌 CREATE

export const createListCategoryController = async (req, res) => {
  try {
    const { name, icon, lists } = req.body;
    const listCategory = await createListCategoryService(name, icon, lists);

    res.status(201).send({ message: 'created', listCategory: listCategory });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
