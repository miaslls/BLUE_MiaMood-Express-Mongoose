import List from './List.js';

export const createListService = (name, icon) => {
  return List.create({ name, icon });
};

export const getAllListsService = () => {
  // return List.find().sort([['name', -1]]);
  return List.find();
};
