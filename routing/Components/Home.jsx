import { useState } from "react";
import { useEffect } from "react";

function Effect(){
    let [items,setItems]=useState([])
    useEffect(()=>{
        fetchData();
    })
    const fetchData=async()=>{
        const res = await fetch("http://dummyjson.com/products")
        const data = await res.json();
        setItems([...data.products])
    }
    return (
        <>
            <div className="main">
                {
                    items.map((item, ind) => {
                        return (
                            <>
                                <div key={ind} className="item">
                                    <img src={item.thumbnail} alt="" />
                                    <h3>{item.title}</h3>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Effect;
