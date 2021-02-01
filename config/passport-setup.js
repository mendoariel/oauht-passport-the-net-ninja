const passport = require('passport');
const GoolgeStrategy = require('passport-google-oauth20');

passport.use(new GoolgeStrategy({ 
    // options for the google strategy
}), () => {
    // passport callback function
})