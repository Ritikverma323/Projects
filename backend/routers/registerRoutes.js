const express= require('express');
const router= express.Router();

const usersModel=require('../Models/usersModel')
const bodyParser=require('body-parser');
router.get('/buyer-register',(req,res)=>{


})

router.post('/register',async(req,res)=>{
 let username=req.body.email;
 let password=req.body.password;
 console.log(req.session)
 if(username){
     // save to database 
     let data = req.body;
     data.sessionId = req.sessionID;
     console.log(data);
    const users = new usersModel(data);
    try {
      await users.save();
      res.send(
        `<h1>You are loged in ${req.session.email}</h1> <h6>${users}</h6> ${JSON.stringify(req.session)}`
      );
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.send(`<h1>Please login again</h1>`);
  }
 
    

})

module.exports=router;