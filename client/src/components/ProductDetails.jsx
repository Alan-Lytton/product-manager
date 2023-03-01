import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const [product,setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
    })

    return (
        <div className="APP">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description:<br/> {product.description}</p>
        </div>
    )
}

export default ProductDetails