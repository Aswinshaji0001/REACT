import { useState } from "react";

function Todo(){
    let [val,setVal]=useState(0)
    function counter(){
        setVal(val+=1)
        console.log(val);
        
    }
    return (
        <>
        <button onClick={counter}>Counter {val}</button>
        </>
    )
}
export default Todo;