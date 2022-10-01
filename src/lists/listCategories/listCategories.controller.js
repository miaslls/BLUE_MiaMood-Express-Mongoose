import {
  createListCategoryService,
  getAllListCategoriesService,
  getListCategoryByIdService,
} from './listCategories.service.js';

// 📌 CREATE

export const createListCategoryController = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const listCategory = await createListCategoryService(name, icon);

    res.status(201).send({ message: 'created', listCategory: listCategory });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAllListCategoriesController = async (req, res) => {
  try {
    const listCategories = await getAllListCategoriesService();

    res.send({ listCategories: listCategories });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY ID

export const getListCategoryByIdController = async (req, res) => {
  try {
    const idParam = req.params.id;

    const listCategory = await getListCategoryByIdService(idParam);

    res.send({ listCategory: listCategory });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
