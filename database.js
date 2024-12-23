const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/'; // Replace with your MongoDB URI

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

module.exports = mongoose;