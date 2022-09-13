import List from './List.js';

export const createListService = (name, icon) => {
  return List.create({ name, icon });
};
