const funcErrorCatch = require('../check/funcErrorCatch');
const { Schema, model } = require('mongoose');

const contactSchema = Schema(  { // схема данных которые может принимать база / строго типизирована
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      unique: true
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
  },
    owner: { // что бы каждый пользватель видел только свои контакты
      type: Schema.Types.ObjectId,
      ref: 'user', // название колекции
    }
},{versionKey:false, timestamps:true});

contactSchema.post("save", funcErrorCatch);
const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
};