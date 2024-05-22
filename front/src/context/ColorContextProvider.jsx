import React, { createContext, useEffect, useState } from 'react'
import { getAll } from "../API/index"
export  const ColorContext= createContext("")
const ColorContextProvider = ({children}) => {

const [colors,setColors] = useState([])
useEffect(()=>{
    getAll().then((res)=>{
        setColors(res.data.data)
    })
},[])
  return (
  <  ColorContext.Provider value={{colors,setColors}}>
  {children}
  </ColorContext.Provider>
  )
}

export default ColorContextProvider
