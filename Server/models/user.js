const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const crypto = require('crypto');

//user schema defining a user 
const User = new Schema ({
    name:{type:String, required:true},
    email:{type:String, required:true},
    dob:{type:Date},
    gender:{type:String},
    hash:String, 
    salt:String
})
User.methods.setPassword= function(password){
    console.log('====================================');
    console.log(password);
    console.log('====================================');
this.salt = crypto.randomBytes(16).toString('hex');
this.hash = crypto.createHash(password);
}
const UserSchema = mongoose.model('User', User);
module.exports= UserSchema;