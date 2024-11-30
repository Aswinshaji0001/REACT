import React, { Children, createContext, useState } from 'react'
export const ThemeContext=createContext();
const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState("light")
    const toggleTheme=()=>{
        setTheme((pre)=>(pre==="light"?"dark":"light"))
    }
    const toggleData=()=>{
        setTheme((pre)=>(pre==="light"?"dark":"light"))
    }
  return (
    <div>
      <ThemeContext.Provider value={{theme,toggleTheme,toggleData}}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider
