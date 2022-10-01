import List from './List.js';

export const createListService = (name, icon) => {
  return List.create({ name, icon });
};

export const getAllListsService = () => {
  return List.find().populate('entries');
};

export const getListByIdService = (id) => {
  return List.findById(id);
};

export const updateListService = (id, body) => {
  return List.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false }).populate('entries');
};

export const deleteListService = (id) => {
  return List.findByIdAndDelete(id);
};
