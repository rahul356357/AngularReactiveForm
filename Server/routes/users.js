var express = require('express');
var router = express.Router();
const User = require('../models/user.js')
const crypto = require('crypto-js');
/* GET users listing. */
//route for saving a user to database
router.post('/', function(req, res, next) {
console.log('====================================');
console.log(req.body);
console.log('====================================');
let newUser= new User({
    name:req.body.name,
    gender:req.body.gender,
    email:req.body.email,
    dob:req.body.dob,
    crypt:crypto.AES.encrypt(req.body.password, 'rahul')
}) ;

newUser.save().then(
    (user)=>
    {
    res.json({success:true, message:"User Successfully Saved", user:user})
    },
    (error)=>{
    res.json({success:false, message:error.message, error:error})
    }
)


});

module.exports = router;
