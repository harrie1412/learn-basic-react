import { useEffect, useState } from "react";
import { getProductList } from "../../service/productService";
import ProductItem from "./ProductItem";
function Product(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchApi = async () =>{
            const result = await getProductList();
            setProducts(result);
        }
        fetchApi();
    },[]);
    console.log(products);
    return(
        <>
        {products.length>0 && (
            <div className="product">
                {products.map((item)=>(
                    <ProductItem item={item} key={item.id}/>
                ))}
            </div>
        )}
        </>
    );
}
export default Product;