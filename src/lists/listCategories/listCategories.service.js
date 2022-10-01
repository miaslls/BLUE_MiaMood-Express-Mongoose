import ListCategory from './ListCategory.js';

export const createListCategoryService = (name, icon) => {
  return ListCategory.create({ name, icon });
};

export const getAllListCategoriesService = () => {
  return ListCategory.find();
};
