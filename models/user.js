const mongoose = require('mongoose');

const characterShema = new mongoose.Schema({
  chaName: { type: String, required: true, },
  chaClass: {
    type: String,
    enum: ['Fighter', 'Wizard', 'Cleric'],
    required: true,
  },
  chaBackground: {
    type: String,
    enum: ['Folk Hero', 'Merchant', 'Acolyte'],
    required: true,
  },
  chaClassTxt: {},
  chaBackgroundTxt: {},
  chaStatPhy: {
    type: Number,
    enum: [0, 1, 2, 3, 4],
    required: true,
  },
  chaStatStu: {
    type: Number,
    enum: [0, 1, 2, 3, 4],
    required: true,
  },
  chaStatCun: {
    type: Number,
    enum: [0, 1, 2, 3, 4],
    required: true,
  },
  chaStatFai: {
    type: Number,
    enum: [0, 1, 2, 3, 4],
    required: true,
  },
});




const userSchema = mongoose.Schema({
  username: { type: String, required: true, },
  password: { type: String, required: true, },
  characters: [characterShema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;