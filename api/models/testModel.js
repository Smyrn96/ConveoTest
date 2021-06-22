//part4
const mongoose=require('mongoose');

var userSchema = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    Age:Number,
    ID:String,
});

module.exports = mongoose.model('Users',userSchema);

