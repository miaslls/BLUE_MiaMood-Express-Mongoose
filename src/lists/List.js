import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    icon: { type: String, required: true, unique: true },
  },
  { versionKey: false },
);

const List = mongoose.Model('List', ListSchema, 'lists');

export default List;
