const mongoose = require('mongoose'); // Use mongoose, not mongosh

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    date: { type: Date, required: true },
});

module.exports = mongoose.model('Event', eventSchema); // Export the Event model



