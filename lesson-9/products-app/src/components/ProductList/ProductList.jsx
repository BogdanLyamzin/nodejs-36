import {useState, useEffect} from "react";
import axios from "axios";

const ProductList = ()=> {
    const [state, setState] = useState([]);
    useEffect(()=> {
        const fetchProducts = async()=> {
            const {data} = await axios.get("http://localhost:4000/api/products");
            setState(data);
        };
        fetchProducts()
    }, []);

    const elements = state.map(({_id, name})=> <li key={_id}>{name}</li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default ProductList;
