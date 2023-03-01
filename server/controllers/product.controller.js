const Product = require('../models/product.model');
const {request,response} = require('express');

module.exports.createProduct = (request,response)=>{
    Product.create(request.body)
        .then(product => response.json(product))
        .catch(err=>response.json(err));
}