const funcErrorCatch = require('../utils/funcErrorCatch');
const { Schema, model } = require('mongoose');

const userSchema = Schema(  { // схема данных которые может принимать база / строго типизирована
   password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter"
  },
  token: {
    type: String,
    default: null,
    },
  avatarURL: {
    type: String,
    required: true,
  },
  

},{versionKey:false, timestamps:true});

userSchema.post("save", funcErrorCatch);
const User = model('user', userSchema);

module.exports = {
  User,
};