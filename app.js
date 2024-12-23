
const express = require('express');
const mongosh = require('./config/database'); // Updated to MongoDB connection

const app = express();
const axios = require('axios');
// Middleware
app.use(express.json());

// Routes
const eventRoutes = require('./routes/events');
app.use('/api', eventRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const router = express.Router();
const Event = require('./models/event'); // Import the Event model

// Create an event
router.post('/', async (req, res) => {
    try {
        const { name, description, location, date } = req.body;
        const newEvent = new Event({ name, description, location, date });
        await newEvent.save(); // Save event to the MongoDB database
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use('/api/events', eventRoutes); // Add the events API route

// MongoDB connection
mongosh.connect('mongodb://localhost:27017/eventDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
