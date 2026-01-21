import React, {  useState } from 'react'
import { ContextTheme } from './ContextTheme'
import Navbar from '../components/Navbar'

export default function ContextProvide({children}) {
    let[theme,setTheme]=useState("light")
    function toggleTheme(){
        setTheme(prev=>prev=="light"?"dark":"light")
    }
  return (
    <>
     <ContextTheme.Provider value={{theme,toggleTheme}}>
        {children}
     </ContextTheme.Provider>
    </>
  )
}
