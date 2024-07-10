const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  scriptsPurchased: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Script'
  }],
  downloadHistory: [{
    scriptId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Script'
    },
    downloadDate: {
      type: Date,
      default: Date.now
    }
  }],
  accountSettings: {
    type: Map,
    of: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;