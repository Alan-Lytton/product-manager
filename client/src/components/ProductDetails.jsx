import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
    })


    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res =>{
                navigate('/product')
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="APP">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description:<br/> {product.description}</p>
            <Link className="me-3" to={`/product/edit/${product._id}`}>Edit Product</Link>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default ProductDetails