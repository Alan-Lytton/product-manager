import React, {useState} from "react";
import axios from "axios";

const Form = (props) => {
    const {products,setProducts} = props;
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/product",{
            title,
            price,
            description
        })
            .then(response =>{
                setProducts([...products,response.data])
            })
            .catch(err=>console.log(err))
        setTitle("")
        setPrice("")
        setDescription("")

    }

    return (
        <div className="APP">
            <form className="col-3 d-flex flex-column mx-auto" onSubmit={onSubmitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" set=".01" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea onChange={(e)=>setDescription(e.target.value)}></textarea>
                </div>
                <span>
                    <input type="submit" value="Add Product"/>
                </span>
            </form>


        </div>
    )
}

export default Form