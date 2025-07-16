"use client"
import { arithmaticValueStore } from '@/store/arithmaticValueStore'
import { enterdValueStore } from '@/store/enterdValueStore'
import React from 'react'

export default function NumberButton({number}:{number:string}) {
    const addEnterdValueToStore= enterdValueStore((state)=>state.addEnterdValueToStore)
    const setDisplayingAnswer= arithmaticValueStore(state=>state.setDisplayingAnswer)

    const handleButtonClick=()=>{
        setDisplayingAnswer("0")
        addEnterdValueToStore(number)
    }
  return (
    <>
    <div className='flex justify-center items-center'>
         <button className='bg-amber-200 text-background 
    p-10 size-1 text-4xl flex justify-center items-center
     rounded-full cursor-pointer hover:brightness-85 active:scale-90 transition-transform duration-100
      ' onClick={handleButtonClick}>
     
            {number}   
        </button>
    </div>
    
    </>
  )
}
