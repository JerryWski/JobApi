const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provie a company name'],
      maxlength: 60,
    },
    position: {
      type: String,
      required: [true, 'Please provie position'],
      maxlength: 150,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Job', JobSchema);
