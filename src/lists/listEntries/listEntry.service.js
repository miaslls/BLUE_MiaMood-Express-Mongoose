import ListEntry from './ListEntry.js';

export const create = (list, text, starred, completed) => {
  return ListEntry.create({ list, text, starred, completed });
};

export const getAll = () => {
  return ListEntry.find().sort([['list', 1]]);
};

export const getById = (id) => {
  return ListEntry.findById(id);
};

export const update = (id, body) => {
  return ListEntry.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const remove = (id) => {
  return ListEntry.findByIdAndDelete(id);
};
