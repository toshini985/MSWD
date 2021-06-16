const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 2
  },
  published: {
    type: Number,
  },
  author: {
    type: String,
    minlength: 2
  },
  genres: [
    { type: String}
  ]
})

schema.plugin(uniqueValidator)
module.exports = mongoose.model('Book', schema)