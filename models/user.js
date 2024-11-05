const mongoose = require('mongoose');

const characterShema = new mongoose.Schema({
  chaName: { type: String, required: true, },
  chaClass: {
    type: String,
    enum: ['fighter', 'wizard', 'cleric'],
    required: true,
  },
  chaBackground: {
    type: String,
    enum: ['folk-hero', 'merchant', 'acolyte'],
    required: true,
  },
  selectedClassFeatures: {},
  selectedBackgroundTxt: {},
  chaStatPhy: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    required: true,
  },
  chaStatStu: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    required: true,
  },
  chaStatCun: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    required: true,
  },
  chaStatFai: {
    type: Number,
    enum: [0, 1, 2, 3, 4, 5],
    required: true,
  },
  chaBackStory: {
    type: String,
  },
  notes: {
    type: String,
  },
});




const userSchema = mongoose.Schema({
  username: { type: String, required: true, },
  password: { type: String, required: true, },
  characters: [characterShema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;