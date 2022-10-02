import * as listEntryService from './listEntry.service.js';
import { getById as getList, update as updateList } from '../list.service.js';

// 📌 CREATE

export const create = async (req, res) => {
  try {
    const { list, text, starred, completed } = req.body;
    const listEntry = await listEntryService.create(list, text, starred, completed);

    const listToUpdate = await getList(list);
    listToUpdate.entries.push(listEntry.id);

    const body = { entries: listToUpdate.entries };
    await updateList(list, body);

    res.status(201).send({ message: 'created', listEntry });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAll = async (req, res) => {
  try {
    const listEntries = await listEntryService.getAll();

    res.send({ listEntries });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET BY ID

export const getById = async (req, res) => {
  try {
    const idParam = req.params.id;
    const listEntry = await listEntryService.getById(idParam);

    res.send({ listEntry });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 UPDATE

export const update = async (req, res) => {
  try {
    const idParam = req.params.id;
    const body = req.body;

    const listEntry = await listEntryService.update(idParam, body);

    res.send({ message: 'updated', listEntry });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 DELETE

export const remove = async (req, res) => {
  try {
    const idParam = req.params.id;

    const deletedEntry = await listEntryService.remove(idParam);

    const listToUpdate = await getList(deletedEntry.list);
    const deletedEntryIndex = listToUpdate.entries.indexOf(idParam);
    listToUpdate.entries.splice(deletedEntryIndex, 1);

    const body = { entries: listToUpdate.entries };
    await updateList(listToUpdate._id, body);

    res.send({ message: 'deleted' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
