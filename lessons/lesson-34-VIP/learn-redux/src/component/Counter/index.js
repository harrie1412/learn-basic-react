import {useDispatch, useSelector} from "react-redux";
import { up, down, reset } from "../../actions/counter";
function Counter(){
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return (
        <>
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(up(3))}>UP 3</button>
        <button onClick={() => dispatch(down(2))}>DOWN 2</button>
        <button onClick={() => dispatch(reset(1))}>RESET 1</button>
        </>
    );
}
export default Counter;