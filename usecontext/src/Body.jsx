import React from 'react'
import { ThemeContext } from './ThemeProvider'
import { useContext } from 'react'

const Body = () => {
    const {theme,toggleData} = useContext(ThemeContext)

  return (
    <div>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }}>
        <div style={{
            width:"500px",
            height:"250px",
            border:"1px solid black",
            backgroundColor:theme==="light"?"yellow":"blue",
            color:theme==="light"?"grey":"white",
        }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente. Eveniet mollitia nesciunt, deleniti voluptates facere rerum! In quas incidunt ratione distinctio repudiandae. Reiciendis atque ab alias, est numquam corrupti.<br></br>
        <button style={{ 
                            padding:"20px",
                            backgroundColor:theme==="light"?"black":"red",
                            color:theme==="light"?"light":"dark",

        }} onClick={toggleData}> CLICK      
        </button>   
</div>
</div>
    </div>
  )
}

export default Body
