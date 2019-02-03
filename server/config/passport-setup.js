const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const { clientID, clientSecret } = require('./config').development.google;

passport.use(
    new GoogleStrategy({
        clientID,
        clientSecret
    }), () => {
        // callback
    }
);