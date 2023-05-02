'use strict';

import mongoose from 'mongoose';

const MoodSchema = new mongoose.Schema(
  {
    type: { type: Number, required: true },
    text: { type: String },
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
  { versionKey: false },
);

const Mood = mongoose.model('Mood', MoodSchema, 'moods');

export default Mood;
