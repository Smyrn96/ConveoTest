'use strict';
var mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
var User = mongoose.model('Users');
const cookieParser = require('cookie-parser');

exports.newUser=function(req,res){
    var token = req.cookies.auth;
    if(token){
      var new_user =new User(req.body);
      new_user.save(function(err, user) {
          if (err) res.send(err);
          res.json(user);
      }); 
    }else{
      return res.status(403).send('No token');
    }
   
};

exports.getUser=function(req,res){
  var token = req.cookies.auth;
  if(token){
    User.findOne({ID:req.params.ID},function(err, user) {
        if (err) res.send(err);
        res.json(user);
      });
  }else{
    return res.status(403).send('No token');
  }
};

exports.updateUser=function(req,res){
  var token = req.cookies.auth;
  if(token){
    User.findOneAndUpdate({ID:req.params.ID},req.body,{new:true},function(err, user) {
        if (err)
          res.send(err);
        res.json(user);
    });
  }else{
    return res.status(403).send('No token');
  }
};

exports.deleteUser=function(req,res){
  var token = req.cookies.auth;

  if(token){
    User.remove({ID:req.params.ID},function(err, user) {
        if (err)
          res.send(err);
        res.json({ message: 'User successfully deleted' });
      });
  }else{
    return res.status(403).send('No token');
  }
}

exports.login=function(req,res){

  jwt.sign({user: req.body},'secret',(err,token)=>{
    res.cookie('auth',token);
    res.send('ok');
  })

}