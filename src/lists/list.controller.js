import * as listService from './list.service.js';
import { remove as deleteEntry } from './listEntries/listEntry.service.js';

// 📌 CREATE

export const create = async (req, res) => {
  try {
    const { name, icon } = req.body;
    const list = await listService.create(name, icon);

    res.status(201).send({ message: 'created', list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAll = async (req, res) => {
  try {
    const lists = await listService.getAll();

    res.send({ lists });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY ID

export const getById = async (req, res) => {
  try {
    const idParam = req.params.id;

    const list = await listService.getById(idParam);

    res.send({ list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 UPDATE

export const update = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const list = await listService.update(idParam, body);

    res.send({ message: 'updated', list });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const remove = async (req, res) => {
  try {
    const idParam = req.params.id;

    const listToDelete = await listService.getById(idParam);
    listToDelete.entries.forEach(async (entry) => await deleteEntry(entry));

    await listService.remove(idParam);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
