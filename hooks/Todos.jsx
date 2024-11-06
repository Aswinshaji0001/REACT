import { useState } from "react";

function Todos(){
    const [Task,setTask]=useState("")
    const [Todo,setTodo]=useState([])
    const addTask=()=>{
        console.log(Task);
        Task?setTodo(pre=>([...pre,Task])):alert("Add Task")
        setTask("")
        
    }
    console.log(Todo);
    
    return(
        <>
                <input type="text" name="task" id="" placeholder="add Task" onChange={(e)=>setTask(e.target.value)} value={Task}/>
                <button onClick={addTask}>Submit</button>
            <ul>
                {
                    Todo.map((Task)=>{
                        <li>{Task}</li>
                    })
                }
            </ul>
        </>
    )

}
export default Todos