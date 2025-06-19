"use client"
import React from 'react'

export default function NumberButton({number}:{number:string}) {
    const handleButtonClick=()=>{
        
    }
  return (
    <>
         <button className='bg-amber-200 text-background 
    p-10 size-3 text-4xl flex justify-center items-center
     rounded-full cursor-pointer hover:brightness-85 active:scale-90 transition-transform duration-100
      ' onClick={handleButtonClick}>
     
            {number}   
        </button>
    
    </>
  )
}
