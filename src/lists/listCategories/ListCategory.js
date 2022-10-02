import mongoose from 'mongoose';

const ListCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  { versionKey: false },
);

const ListCategory = mongoose.model('ListCategory', ListCategorySchema, 'list-categories');

export default ListCategory;
