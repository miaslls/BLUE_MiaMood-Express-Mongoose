import * as listCategoryService from './listCategory.service.js';

// 📌 CREATE

export const create = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const listCategory = await listCategoryService.create(name, icon);

    res.status(201).send({ message: 'created', listCategory });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAll = async (req, res) => {
  try {
    const listCategories = await listCategoryService.getAll();

    res.send({ listCategories });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY ID

export const getById = async (req, res) => {
  try {
    const idParam = req.params.id;

    const listCategory = await listCategoryService.getById(idParam);

    res.send({ listCategory });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 UPDATE

export const update = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const listCategory = await listCategoryService.update(idParam, body);

    res.send({ message: 'updated', listCategory });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const remove = async (req, res) => {
  try {
    const idParam = req.params.id;
    await listCategoryService.remove(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
