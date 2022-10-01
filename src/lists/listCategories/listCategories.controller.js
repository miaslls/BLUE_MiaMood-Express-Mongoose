import {
  createListCategoryService,
  getAllListCategoriesService,
  getListCategoryByIdService,
  updateListCategoryService,
  deleteListCategoryService,
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

// 📌 UPDATE

export const updateListCategoryController = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const listCategory = await updateListCategoryService(idParam, body);

    res.send({ message: 'updated', listCategory: listCategory });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const deleteListCategoryController = async (req, res) => {
  try {
    const idParam = req.params.id;
    await deleteListCategoryService(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
