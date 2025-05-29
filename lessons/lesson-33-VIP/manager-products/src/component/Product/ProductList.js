import { useEffect, useState } from "react";
import './Product.scss';
import EditProduct from "../EditProduct";
import DeleteProduct from "../DeleteProduct";
import { getProductList } from "../../service/productsService";
function ProductList(props){
    const {reload} = props;
    const [products, setProducts] = useState([]);
    const [reloadEdit, setReloadEdit] = useState(false);
    useEffect(()=>{
        const fetchApi = async () => {
            const result = await getProductList();
            setProducts(result.reverse());
        }
        fetchApi();
    },[reload,reloadEdit])
    const handleReloadEdit = () => {
        setReloadEdit(!reloadEdit);
    }
    return (
        <>
        <div className="product__list">
            {products.map((item)=>(
                <div className="product__item" key={item.id}>
                    <div className="product__image">
                        <img src={item.thumbnail} alt={item.title}/>
                    </div>
                    <h4 className="product__title">{item.title}</h4>
                    <div className="product__price">{item.price}</div>
                    <div className="product__discount">{item.discountPercentage}</div>
                    <div className="product__action">
                        <EditProduct item={item} onReloadEdit={handleReloadEdit}/>
                        <DeleteProduct item={item} onReloadEdit={handleReloadEdit}/>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
export default ProductList;