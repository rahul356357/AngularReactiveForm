const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const crypto = require('crypto');

//user schema defining a user 
const User = new Schema ({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    dob:{type:Date},
    gender:{type:String},
    crypt:String
})

const UserSchema = mongoose.model('User', User);
module.exports= UserSchema;