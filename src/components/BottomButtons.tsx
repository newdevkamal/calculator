import React from 'react'
import NumberButton from './NumberButton'

export default function BottomButtons() {
  return (
    <div className='grid grid-cols-3 gap-2 w-[300px] '>
        <NumberButton number={"+,-"}/>
        <NumberButton number={"0"}/>
        <NumberButton number={"."}/>
        
    </div>
  )
}
