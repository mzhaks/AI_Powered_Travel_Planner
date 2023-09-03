const bcrypt = require('bcrypt');

const hashpassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error; // Rethrow any error that occurs during hashing
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw error; // Rethrow any error that occurs during comparison
  }
};

module.exports = {
  hashpassword,
  comparePassword
};
