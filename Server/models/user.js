var mongoose = require('mongoose');

// Define our user schema
var UserSchema= new mongoose.Schema({     
    firstname : {type:String}, 
    lastname  : {type:String}, 
    email     : {type: String},             
    password  : {type: String},
    role      : {type:Number}
 });
module.exports = mongoose.model('User',UserSchema);