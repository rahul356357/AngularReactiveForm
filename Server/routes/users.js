var express = require('express');
var router = express.Router();
const User = require('../models/user.js')
const crypto = require('crypto');
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
}) ;
newUser.setPassword(req.body.password);
newUser.save().then(
    (done)=>
    {
    console.log(done)
    },
    (error)=>{
        console.log(error)
    }
)



res.json("reached")



});

module.exports = router;
