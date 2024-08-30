const mongoose = require('mongoose');

const fertilizerSchema = new mongoose.Schema({
  fertilizerName: {
    type: String,
    required: true
  },
  fertilizerImage : {
    type:String
  }
}, {
  timestamps: true
});

const Fertilizer = mongoose.model('Fertilizer', fertilizerSchema);

module.exports = Fertilizer;