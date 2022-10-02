import List from './List.js';

export const create = (name, icon) => {
  return List.create({ name, icon });
};

export const getAll = () => {
  return List.find().populate('entries');
};

export const getById = (id) => {
  return List.findById(id);
};

export const update = (id, body) => {
  return List.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false }).populate('entries');
};

export const remove = (id) => {
  return List.findByIdAndDelete(id);
};
