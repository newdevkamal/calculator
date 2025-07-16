"use client"
import { arithmaticValueStore } from '@/store/arithmaticValueStore'
import { enterdValueStore } from '@/store/enterdValueStore'
import React from 'react'

export default function DisplayEnteredValue() {
  const value= enterdValueStore((state)=>state.value)
  
  const operationsArr=arithmaticValueStore(state=>state.operationsArr)
  const displayingAnswer = arithmaticValueStore(state => state.displayingAnswer)

  const showAnswerOrEnteredValue = () => {
    if (displayingAnswer!=="0") {

      return displayingAnswer
    }
    else{
      if (value) {
        return value
      }else{
        return "0"
      }
    } 
  }
  
  return (
    <div className='w-[400px] h-[120px] flex flex-col justify-end px-10 py-5 text-foreground text-5xl rounded-3xl border-1 border-foreground'>
        <div className='flex justify-end text-2xl text-foreground/50'>
         {operationsArr}
        </div>
        
        <div className='flex justify-end'>
           {showAnswerOrEnteredValue()}
        </div>
    </div>
  )
}
