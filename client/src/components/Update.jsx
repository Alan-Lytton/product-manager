import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Update = (props) => {

    const {id} = useParams();
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription]= useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err=>console.log(err))
    },[])

    const updateProduct = (e)=>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res =>{
                console.log(res)
                navigate('/product')
            })
            .catch(err=>console.log(err))
    }

    return (
        <div className="APP">
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label><br/>
                    <input name="title" type="text"  value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}/>
                </p>
                <p>
                    <label>Price: </label><br/>
                    <input type="number" name="price" value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}/>
                </p>
                <p>
                    <label>Description: </label><br/>
                    <textarea onChange={(e)=>{setDescription(e.target.value)}} name="description" value={description}></textarea>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Update