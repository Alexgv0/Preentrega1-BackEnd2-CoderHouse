const passport = require('passport');
const localStrategy = require('../strategies/localStrategy');
const jwtStrategy = require('../strategies/jwtStrategy');
const googleStrategy = require('../strategies/googleStrategy');
const facebookStrategy = require('../strategies/facebookStrategy');

// Registrar estrategias
passport.use(localStrategy);
passport.use(jwtStrategy);
passport.use(googleStrategy);
passport.use(facebookStrategy);

module.exports = passport;
