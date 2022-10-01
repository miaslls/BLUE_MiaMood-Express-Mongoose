import ListCategory from './ListCategory.js';

export const createListCategoryService = (name, icon, lists) => {
  return ListCategory.create({ name, icon, lists });
};
