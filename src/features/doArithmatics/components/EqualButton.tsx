"use client"

import { arithmaticValueStore } from '@/store/arithmaticValueStore'
import { enterdValueStore } from '@/store/enterdValueStore'
import { calculateAnwer } from '@/utils/calculateAnswer'
import React from 'react'

export default function EqualButton() {

    const enterdValue=enterdValueStore(state=>state.value)
    const clearEnterdValue=enterdValueStore(state=>state.clearNumber)

    const operationsArr=arithmaticValueStore(state=>state.operationsArr)
    const clearOperationsArr=arithmaticValueStore(state=>state.clearOperationsArr)
    const addToOperationArr=arithmaticValueStore(state=>state.addToOperationArr)
    const setAnswer= arithmaticValueStore(state=>state.setAnswer)
    const setDisplayingAnswer= arithmaticValueStore(state=>state.setDisplayingAnswer)
  
  const handleButtonClick=()=>{
      if(enterdValue){
        addToOperationArr(enterdValue)
  
        const answer = calculateAnwer()
        setAnswer(answer)
        setDisplayingAnswer(answer.toString())
      }
      clearEnterdValue() 
      clearOperationsArr()
      
    }
  return (
    <div className='flex justify-center items-center'>
         <button className='bg-amber-200 text-background 
                  p-10 size-3 text-4xl flex justify-center items-center
                  rounded-full cursor-pointer hover:brightness-85 
                  active:scale-90 transition-transform duration-100' 
                  onClick={handleButtonClick}>
     
            =
        </button>
    </div>
  )
}
