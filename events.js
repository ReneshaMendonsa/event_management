const express = require('express');
const router = express.Router();


// Create Event
router.post('/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).send(event);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get All Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
