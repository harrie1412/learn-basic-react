import { useDispatch } from "react-redux";
import {deleteItem, updateQuantity} from '../../action/cart'
import { useRef } from "react";
function CartItem(props){
    const {item} = props;
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleDown = () =>{
        if(item.quantity > 1){
            dispatch(updateQuantity(item.id,-1));
            inputRef.current.value = parseInt(inputRef.current.value) - 1;
        }
    };
    const handleUp = ()=>{
        dispatch(updateQuantity(item.id));
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    };
    const handleDelete = () => {
        dispatch(deleteItem(item.id));
    };
    return(
        <div className="cart__item">
            <div className="cart__image">
                <img src={item.info.thumbnail} alt={item.info.title}/>
            </div>
            <div className="cart__content">
                <h4 className="cart__title">{item.info.title}</h4>
                <div className="product__price-new">{((item.info.price)-((item.info.price*item.info.discountPercentage)/100)).toFixed(0)}$</div>
                <div className="cart__price-old">{item.info.price}$</div>
            </div>
            <div className="cart__quantity">
                <button onClick={handleDown}>-</button>
                <input className="number" ref={inputRef} defaultValue={item.quantity}  />
                <button onClick={handleUp}>+</button>
                <button className="cart__delete" onClick={handleDelete}>Xóa</button>
            </div>
        </div>
    );
}
export default CartItem;