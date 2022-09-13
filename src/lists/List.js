import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    icon: { type: String, required: true, unique: true },
    entries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ListEntry' }],
  },
  { versionKey: false },
);

const List = mongoose.model('List', ListSchema, 'lists');

export default List;
