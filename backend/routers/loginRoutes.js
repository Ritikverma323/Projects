const express = require("express");
const router = express.Router();
const usersModel = require("../Models/usersModel");
const bodyParser=require('body-parser');
router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.post("/login", async (req, res) => {
 // check if user exist in database

 usersModel.findOne({email:req.body.email}).then(
     (user)=>{
         if(user!=null) {
            console.log(`user exist ${user}`);
            res.send(`user exist ${user}`)
          
         }
         else{
            console.log("user not exist")
            res.send('user do not exist register new user')
         }
     
            
       
     }
 ).catch((err)=>{
   console.log(error)
 });
    
    
});

module.exports = router;
