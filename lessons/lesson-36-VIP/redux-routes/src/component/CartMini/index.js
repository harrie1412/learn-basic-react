import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
function CartMini(){
    const cart = useSelector(state => state.cartReducer);
    // console.log(cart);
    const total = cart.reduce((sum, item) => {
        return sum + item.quantity;
    },0);
    console.log(total);
    return(
        <>
            <Link to="/cart" >Giỏ hàng ({total})</Link>
        </>
    );
}
export default CartMini;