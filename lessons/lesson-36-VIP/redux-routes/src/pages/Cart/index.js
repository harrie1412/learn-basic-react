import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import './Cart.scss';
import { deleteAll } from "../../action/cart";
function Cart(){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer);
    const fee = cart.reduce((sum,item)=>{
        const newPrice = ((item.info.price)-((item.info.price*item.info.discountPercentage)/100));
        return sum + newPrice*item.quantity;
    },0);
    const handleDeleteAll = ()=>{
        dispatch(deleteAll());
    }
    return(
        <>
            <h2>Giỏ hàng</h2>
            <button className="cart__delete-all" onClick={handleDeleteAll}>Xóa tất cả</button>
            <div>
                {(cart.length>0) ? (
                    <>
                        <CartList/>
                        <div className="cart__total">
                            Tổng tiền: <span className="cart__fee">{fee.toFixed(0)}$</span>
                        </div>
                    </>
                ) : (
                    <>Giỏ hàng trống</>
                )}
            </div>
        </>
    );
}
export default Cart;