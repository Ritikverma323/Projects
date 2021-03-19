const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'});
const PORT = process.env.PORT || 5000;
const path=require('path');
const mongoose=require('mongoose');
const database=require('./database/database')
const buyerModel=require('./Models/BuyerModel');
const productCategory=require('./routers/ProductsCategory')

let cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/',(req,res)=>{
  console.log(req.body);
  
  let user = new buyerModel({name:'blosom',email:'blosom@gmail.com',password:'ljuhhhuhjhu',buyerProfileImage:'jblkj;knkm',sessionId:'09898799'
  });
  user.save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send(`unable to save to database ${err}` );
    });
  // res.send("Hello from express");
})

app.use(productCategory);
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})
