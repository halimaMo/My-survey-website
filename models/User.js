const mongoose = require('mongoose');
const {Schema} = mongoose;

//collection
const userSchema = new Schema({
    googleID: String
});

//create a new collection called userSchema 
mongoose.model('users', userSchema);