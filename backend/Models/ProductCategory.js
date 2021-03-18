// creating Mongoose schema and model

const mongoose=require('mongoose');
const { uuid } = require('uuidv4');
const schema=mongoose.Schema;

const ProductCategorySchema=new schema({
    category:{type:String,required:true},
    path:{type:String,required:false}

});

const ProductsCategoryModel=mongoose.model("ProductCategory",ProductCategorySchema);
module.exports=ProductsCategoryModel;