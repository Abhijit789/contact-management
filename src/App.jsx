import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Routes'
import ContextProvide from './contextapi/ContextProvide'
import Counter from './usereducer/Counter'

export default function App() {
  return (
    <>
    {/* <ContextProvide>
    <RouterProvider router={router}/>
    </ContextProvide> */}
    <Counter/>
    
    </>
  )
}
