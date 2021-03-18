// creating Mongoose schema and model

const mongoose=require('mongoose');
const { uuid } = require('uuidv4');
const schema=mongoose.Schema;

const BuyerSchema=new schema({
    buyer_id:{ type: String, default: uuid()},
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    buyerProfileImage:{type:String,required:true},
    sessionId:{type:String,required:true}

});

const buyerModel=mongoose.model("buyer",BuyerSchema);
module.exports=buyerModel;