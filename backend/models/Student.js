const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

name: {
    type: String,
     },
  age: Number,
  class: String
  
});

module.exports = mongoose.model('Student', studentSchema,'Student');
