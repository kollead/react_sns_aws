const passport = require('passport');
const {Stratege: LocalStratege} = require('passport-local');

module.exports = () => {
  passport.use(new LocalStratege());
};