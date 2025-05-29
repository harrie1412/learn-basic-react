import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import './Todos.scss';
import { completedTodo, undoTodo, deleteTodo } from "../../actions/todos";
function TodoList(){
    const todoList = useSelector(state => state.todosReducer);
    const dispatch = useDispatch();
    const handleCompleted = (id) =>{
        dispatch(completedTodo(id));
        // console.log(id);
    }
    const handleUndo = (id) =>{
        dispatch(undoTodo(id));
        // console.log(id);
    }
    console.log(todoList);
    return(
        <>
        {todoList &&
            <ul className="todos__list">
                {todoList.map((item)=>(
                    <li className="todos__item" key={item.id}>
                        <span
                        className={"todos__content " +
                            (item.completed && "todos__content--completed")
                        }
                        >{item.content}</span>
                        {item.completed ? <button onClick={()=>handleUndo(item.id)}>U</button> : <button onClick={()=>handleCompleted(item.id)}>V</button>}
                        <button onClick={()=>dispatch(deleteTodo(item.id))}>X</button>
                    </li>
                ))}
            </ul>
        }
        </>
    );
}
export default TodoList;