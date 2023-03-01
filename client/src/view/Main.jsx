import React, {useState} from "react";
import Form from "../components/Form";
import ListProducts from "../components/ListProducts";

const Main = (props) => {
    const [products,setProducts] = useState([])

    return (
        <div className="APP">
            <Form products={products} setProducts={setProducts}/>
            <ListProducts products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main