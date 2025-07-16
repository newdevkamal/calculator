"use client"
import { arithmaticValueStore } from '@/store/arithmaticValueStore'
import { enterdValueStore } from '@/store/enterdValueStore'
import React from 'react'

export default function ClearAllButton() {

  const clearEnteredValue = enterdValueStore(state=>state.clearNumber)
  const clearArithmaticValuesArr=arithmaticValueStore(state=>state.clearOperationsArr) 
  const clearAnswer=arithmaticValueStore(state=>state.setAnswer) 
  const setDisplayingAnswer= arithmaticValueStore(state=>state.setDisplayingAnswer)

  const handleButtonClick=()=>{
    clearEnteredValue()
    clearArithmaticValuesArr()
    clearAnswer(0)
    setDisplayingAnswer("0")
  }

  return (
    <>
      <div className='flex justify-center items-center'>
         <button className='bg-amber-200 text-background 
                p-10 size-3 text-4xl flex justify-center items-center
                rounded-full cursor-pointer hover:brightness-85 
                active:scale-90 transition-transform duration-100'
                onClick={handleButtonClick} >
     
            {"C"}
        </button>
      </div>
    
    </>
  )
}
