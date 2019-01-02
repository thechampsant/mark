const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/users');

var app = express();

var pinCodes = [713301,713303,713305];

var port = process.env.PORT || 3000;


var p =(area)=>{
        var isP=pinCodes.filter((value)=> value===area);
        console.log(isP);
        return isP.toString();
}

app.use(bodyParser.json());

app.post('/user',(req,res)=>{

    var user = new User({
        Name: req.body.Name,
        MobileNumber: req.body.MobileNumber,
        Email: req.body.Email,
        Area: p(req.body.Area),
        Password: req.body.Password
    });
   user.save().then((doc)=>{
       console.log(`save: ${doc}`);
       res.send(doc);
   },(e)=>{
       console.log(`error: ${e}`);
       res.send(e);
   }) 
});

app.listen(port,()=>{
    console.log(`app started on port ${port}`);
})