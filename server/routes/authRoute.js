
const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser,loginUser} = require('../Controllers/authController')

//middleware
router.use(
  cors({
      credentials: true,
      origin: 'http://localhost:3000'
  })
)
//test
router.get('/', test)
// register the user post
router.post('/register', registerUser)
router.post('/login', loginUser)

// Get all trips
router.get('/all', (req, res) => {
  // Handle fetching all trips
});

// Join a trip
router.post('/join/:tripId', (req, res) => {
  const tripId = req.params.tripId;
  // Handle joining a trip
});

module.exports = router;
