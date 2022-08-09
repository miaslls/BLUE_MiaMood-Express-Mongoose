'use strict';

import mongoose from 'mongoose';

const MoodSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    // icon: { type: String, required: true },
    type: { type: Number, required: true },
    text: { type: String },
    dateTime: { type: String, required: true },
  },
  { versionKey: false },
);

const Mood = mongoose.model('Mood', MoodSchema, 'moods');

export default Mood;
