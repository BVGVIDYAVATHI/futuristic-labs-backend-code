const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  components: {
    type: Array,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Assuming you have a User model
  },
  pageId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }
});

module.exports = mongoose.model('Page', pageSchema);
