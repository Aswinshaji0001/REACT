import { useState } from "react";
import { useEffect } from "react";

function Effect(){
    let [count,setCount]=useState(0)
    let [val,setVal]=useState(null)
    useEffect(()=>{
        fetchData();
    },[count])
    const fetchData=async()=>{
        const res = await fetch("http://dummyjson.com/products")
        const data = await res.json();
        setVal(data.products)
    }
    return(
        <>
            <button onClick={()=>setCount(count+=1)}>Click</button>
            {
                val?val.map((vl,ind)=><h1 key={ind}>{vl.title}</h1>):<h1>Loading</h1>
            }
        </>
    )
}

export default Effect;
