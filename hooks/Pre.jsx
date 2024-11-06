import React, { useState } from "react";

function Pre(){
    let [val,setVal]=useState({
        name:"",
        age:""
    })
    const onHandleChange=(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        setVal((pre=>{return {...pre,[e.target.name]:e.target.value}}))
        
    }
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        console.log(val);
    }
    return(
        <>
        <form action="">
        <input type="text" name="name" placeholder="name" onChange={onHandleChange}/>
        <input type="text" name="age" placeholder="age"onChange={onHandleChange} />
        <button onClick={onHandleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Pre