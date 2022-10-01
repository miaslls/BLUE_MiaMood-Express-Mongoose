import ListCategory from './ListCategory.js';

export const createListCategoryService = (name, icon) => {
  return ListCategory.create({ name, icon });
};

export const getAllListCategoriesService = () => {
  return ListCategory.find();
};

export const getListCategoryByIdService = (id) => {
  return ListCategory.findById(id);
};

export const updateListCategoryService = (id, body) => {
  return ListCategory.findByIdAndUpdate(id, body).setOptions({ returnOriginal: false });
};

export const deleteListCategoryService = (id) => {
  return ListCategory.findByIdAndDelete(id);
};
