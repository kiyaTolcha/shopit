const Product=require('../models/product');

//create new products => /api/v1/products/new
exports.newProduct=async(req,res)=>{
    const product=await Product.create(req.body);
    res.status(200).json({
        success: true,
        product,
        
    })
}

exports.getProducts=(req,res)=>{
    res.status(200).json({
        success:true,
        message:'This route will show all products in db.'
    })
}