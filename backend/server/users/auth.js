const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION_TIME } = require('../config');

/**
 * Function that hashes the password using bcryptjs
 * @param {string} password 
 * @async
 * @returns hash value of the user's password
 */
const hashThePassword = async (password) => {
   const hashSalt = await bcrypt.genSalt();
   return bcrypt.hash(password, hashSalt);
};

/**
 * Function that compares the passwords
 * @param {string} password user pasword
 * @param {string} dataPassword db pasword
 * @returns boolean
 */
const matchPasswords = async (password, dataPassword) => {
   return bcrypt.compare(password, dataPassword);
}


/**
 * Generate token for user
 * @param {string} username 
 * @returns {string} token
 */
const generateToken = (username) => {
   const token = jwt.sign({username}, JWT_SECRET, {
      expiresIn: JWT_EXPIRATION_TIME
   } );
   return {
      accessToken: token,
      expiresIn: '3h'
   }
}


module.exports = {
   hashThePassword,
   matchPasswords,
   generateToken
}