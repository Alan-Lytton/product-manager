import React, {useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ListProducts = (props) => {
    const {products,setProducts} = props;

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(response => setProducts(response.data))
            .catch(err=>console.log(err))
    },[])

    const removeFromDom = productId =>{
        setProducts(products.filter(product =>product._id != productId))
    }

    const deleteProduct = (productId) =>{
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res =>{
                removeFromDom(productId)
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="APP mt-3">
            <h1>All Products:</h1>
            {
                products.map((product,index)=>{
                    return(
                        <div key={index}>
                            <Link className="me-3" to={`/product/${product._id}`}>{product.title}</Link>
                            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListProducts