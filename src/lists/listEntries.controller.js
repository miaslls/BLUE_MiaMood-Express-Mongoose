import { createListEntryService, getAllListEntriesService } from './listEntries.service.js';
import { getListByIdService, updateListService } from './lists.service.js';

// 📌 CREATE

export const createListEntryController = async (req, res) => {
  try {
    const { list, text, starred, completed } = req.body;
    const listEntry = await createListEntryService(list, text, starred, completed);

    const listToUpdate = await getListByIdService(list);
    const body = { entries: [...listToUpdate.entries, listEntry._id] };
    const updatedList = await updateListService(list, body);

    res.status(201).send({ message: 'created', listEntry: listEntry, list: updatedList });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// 📌 GET ALL

export const getAllListEntriesController = async (req, res) => {
  try {
    const listEntries = await getAllListEntriesService();

    res.send({ listEntries: listEntries });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
