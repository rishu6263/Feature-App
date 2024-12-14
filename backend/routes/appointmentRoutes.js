const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');

const router = express.Router();
router.post('/create', createAppointment);

module.exports = router;
router.get('/user/:userId', async (req, res) => {
    try {
      const appointments = await Appointment.find({ user: req.params.userId }).populate('doctor');
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });