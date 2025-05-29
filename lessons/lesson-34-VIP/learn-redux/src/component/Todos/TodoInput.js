import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todos";
import { useRef } from "react";
function TodoInput(){
    const dispatch = useDispatch();
    const inputRef = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(e.target.elements.content.value !== ""){
            dispatch(createTodo(e.target.elements.content.value));
            inputRef.current.value = "";
            inputRef.current.focus();
            console.log(Date.now());
        }
    }
    return(
        <>
        <div className="todos__input">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nội dung..." name="content" ref={inputRef}/>
                <button type="submit">+</button>
            </form>
        </div>
        </>
    );
}
export default TodoInput;