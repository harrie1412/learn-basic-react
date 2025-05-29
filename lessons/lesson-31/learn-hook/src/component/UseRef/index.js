import { useRef, useState } from "react";

function UseRef(){
    const [counter, setCounter] = useState(0);
    const counterRef = useRef(0);
    const counterObj = {
        current: 0
    };
    var handleClick = ()=>{
        setCounter(counter+1);
        counterRef.current = counterRef.current + 1;
        counterObj.current = counterObj.current + 1;
    }
    console.log(counter);
    console.log(counterRef);
    console.log(counterObj);
    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    );
}
export default UseRef;