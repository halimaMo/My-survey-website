const mongoose = require('mongoose');
const {Schema} = mongoose;

//collection
const userSchema = new Schema({
    googleID: String,
    credits: { type: Number, default: 0}
});

//create a new collection called userSchema 
mongoose.model('users', userSchema);