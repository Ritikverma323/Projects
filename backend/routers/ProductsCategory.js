const express=require('express');
const router=express.Router();
const ProductsCategoryModel=require('../Models/ProductCategory')
const ProductsCategoryController=require('../controller/ProductCategory')
router.get('/product-category',ProductsCategoryController.ProductsCategory);
router.post('/product-category',ProductsCategoryController.addNewProductCategory)

module.exports=router;