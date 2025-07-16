"use client"
import { enterdValueStore } from '@/store/enterdValueStore'
import React from 'react'

export default function DecimalButton() {

  const addEnterdValueToStore=enterdValueStore(state=>state.addEnterdValueToStore)
  
    const enterdValue=enterdValueStore(state=>state.value)

    const handleButtonClick=()=>{
        if(!enterdValue.includes(".")){
          addEnterdValueToStore(".")
        }
    }
  return (
    <div className='flex justify-center items-center'>
         <button className='bg-amber-200 text-background 
                      p-10 size-3 text-4xl flex justify-center items-center
                      rounded-full cursor-pointer hover:brightness-85 active:scale-90 transition-transform duration-100'
                  onClick={handleButtonClick} >
     
            .
        </button>
    </div> 
  )
}
