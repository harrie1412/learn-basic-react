import { useSelector, useDispatch } from "react-redux";
import { up, down, reset } from "../../actions/counter"
function Counter2(){
    const counter2 = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return(
        <>
        <h2>Counter2: {counter2}</h2>
        <button onClick={() => dispatch(up(4))}>UP 4</button>
        <button onClick={() => dispatch(down(5))}>DOWN 5</button>
        <button onClick={() => dispatch(reset(3))}>RESET 3</button>
        </>
    )
}
export default Counter2;