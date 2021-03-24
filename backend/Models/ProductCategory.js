// creating Mongoose schema and model

const mongoose=require('mongoose');
const { uuid } = require('uuidv4');
const schema=mongoose.Schema;

const ProductCategorySchema=new schema({
    category:{type:String,required:true,unique:true},
    path:{type:String,required:true,unique:true},
    parent:{type:String,default:null},
    categorylevel:{type:Number,required:true}

});

const ProductsCategoryModel=mongoose.model("ProductCategory",ProductCategorySchema);
module.exports=ProductsCategoryModel;