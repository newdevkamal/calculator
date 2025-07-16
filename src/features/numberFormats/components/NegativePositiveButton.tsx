"use client"
import { enterdValueStore } from '@/store/enterdValueStore'
import React from 'react'

export default function AddButton() {

  const enterdValue= Number(enterdValueStore(state=>state.value))
  const resetEnteredValue=enterdValueStore(state=>state.resetValue)

  const handleButtonClick=()=>{
    const newValue=String(enterdValue*-1.0)
    resetEnteredValue(newValue)
  }

  return (
    <div className='flex justify-center items-center'>
         <button className='bg-amber-200 text-background 
                          p-10 size-3 text-4xl flex justify-center items-center
                          rounded-full cursor-pointer hover:brightness-85 
                          active:scale-90 transition-transform duration-100'
                onClick={handleButtonClick}          >
     
            +/-
        </button>
    </div> 
  )
}
