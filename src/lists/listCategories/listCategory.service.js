import ListCategory from './ListCategory.js';

export const create = (name, icon) => {
  return ListCategory.create({ name, icon });
};

export const getAll = () => {
  return ListCategory.find();
};

export const getById = (id) => {
  return ListCategory.findById(id);
};

export const update = (id, body) => {
  return ListCategory.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const remove = (id) => {
  return ListCategory.findByIdAndDelete(id);
};
