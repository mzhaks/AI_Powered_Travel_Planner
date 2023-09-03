const User = require('../models/users');
const { hashPassword, comparePassword, hashpassword } = require('../helpers/auth');
// const jwt = require('jsonwebtoken');
const test = (req, res) => {
  res.json('test is working');
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if a name was entered
    if (!name) {
      return res.json({
        error: 'Name is required',
      });
    }
    // Check if the password is good
    if (!password || password.length < 6) {
      return res.json({
        error: 'Password is required and should be at least 6 characters long',
      });
    }
    // Check if the email is already in use
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: 'Email is already taken. Please try another one.',
      });
    }
    const hashedPassword = await hashpassword(password);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: 'No user found',
      });
    }
    if (!password || !user.password) {
      return res.json({ error: 'Invalid input' });
    }
    // Check password match
    const match = await comparePassword(password, user.password);
    if (match) {
      // jwt.sign({email: user.email, id:user._id, user.name},)
      // jwt.sign({email: user.email, id:user._id,name: user.name},process.env.JWT_SECRET,{},(err,token)=>{
      //   if(err) throw err;
      //   res.cookie('token',token).json(user)
      // })
    
      // Assign JSON web token (basically a cookie)
      res.json('Password match');
    } else {
      res.json('Password mismatch');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createTrip = (req, res) => {
  // Implement logic to create a trip and store it in the database
};

exports.getAllTrips = (req, res) => {
  // Implement logic to fetch all trips from the database
};

exports.joinTrip = (req, res) => {
  const tripId = req.params.tripId;
  // Implement logic to join a trip and update the database
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
