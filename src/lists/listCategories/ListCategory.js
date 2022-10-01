import mongoose from 'mongoose';

const ListCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    icon: { type: String, required: true, unique: true },
    // 👁‍🗨 is this 🔻 really necessary?
    lists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  },
  { versionKey: false },
);

const ListCategory = mongoose.model('ListCategory', ListCategorySchema, 'list-categories');

export default ListCategory;
