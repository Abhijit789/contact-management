import React from 'react'

export default function Input({type,placeholder,name,id,className,value}) {
  return (
    <>
    <input type={type} value={value} name={name} id={id} placeholder={placeholder} className={className} />
    </>
  )
}
