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

    return (
        <div className="APP mt-3">
            <h1>All Products:</h1>
            {
                products.map((product,index)=>{
                    return(
                        <div key={index}>
                            <Link to={`/product/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListProducts