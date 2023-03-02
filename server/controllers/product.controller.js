const Product = require('../models/product.model');
const {request,response} = require('express');

module.exports.getAllProducts = (request,response)=>{
    Product.find()
        .then(product => response.json(product))
        .catch(err=>response.json(err))

}

module.exports.createProduct = (request,response)=>{
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err=>response.json(err));
}

module.exports.getProduct = (request,response)=>{
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err=>response.json(err))
}

module.exports.updateProduct = (request,response)=>{
    Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
        .then(updateProduct=>response.json(updateProduct))
        .catch(err=>console.log(err))
}

module.exports.deleteProduct = (request,response) =>{
    Product.deleteOne({_id:request.params.id})
        .then(deleteProduct=>response.json(deleteProduct))
        .catch(err=>console.log(err))
}

