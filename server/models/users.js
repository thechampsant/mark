const bcrypt = require('bcrypt');

var {mongoose} = require('./../db/mongoose');

var User = mongoose.model('User',{
   Name:{
       type: String,
       required: true,
       minlength:1,
   }, 
   MobileNumber:{
        type: Number,
        required:true,
        minlength:10,
        maxlength:10
   },
    Email:{
        type:String,
    },
    Area:{
        type:Number,
        required:true
    },
    Password:{
        type:String,
        bcrypt:true        
    },
    Status:{
        type:Boolean,
        default:false
    }
});


module.exports = {
    User
};