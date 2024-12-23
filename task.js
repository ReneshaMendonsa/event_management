const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  deadline: { type: Date },
  attendeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
});

module.exports = mongoose.model('Task', taskSchema);
