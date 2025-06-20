"use client"
import { enterdValueStore } from '@/store/enterdValueStore'
import React from 'react'

export default function DisplayEnteredValue() {
  const value= enterdValueStore((state)=>state.value)
  
  return (
    <div className='w-[400px] flex justify-end px-10 py-5 text-foreground text-5xl rounded-3xl border-1 border-foreground'>
        {!(value)?"0":value}
    </div>
  )
}
