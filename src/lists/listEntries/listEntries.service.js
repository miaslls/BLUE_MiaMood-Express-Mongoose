import ListEntry from './ListEntry.js';

export const createListEntryService = (list, text, starred, completed) => {
  return ListEntry.create({ list, text, starred, completed });
};

export const getAllListEntriesService = () => {
  return ListEntry.find().sort([['list', 1]]);
};

export const updateListEntryService = (id, body) => {
  return ListEntry.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const deleteListEntryService = (id) => {
  return ListEntry.findByIdAndDelete(id);
};
