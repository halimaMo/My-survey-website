const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) =>{
    //the first argument is used if an error occurs but will use null for now
    //user.id is not a profile id, it is the id assigned to this record by mongo
    done (null, user.id);
});

passport.deserializeUser((id, done) =>{
    //search User collection and put in user          
    User.findById(id)
    .then (user => {
        done(null, user)
    });
});

passport.use(
    new GoogleStrategy(
    {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleID: profile.id}).then (existingUser =>{
            if(existingUser){
                //we already have a record with the given profile ID
                //Instance represents one record
                done(null, existingUser);
            }
            else{
                //we don't have a user record with this ID
                //User record created and saved into the DB
                new User({ googleID: profile.id}).save().then (user =>(null, user));
            }
        });
     }
    )
);