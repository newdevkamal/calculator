import React from 'react'
import NumberButton from './NumberButton'

export default function NumberGrid() {
  return (
    <div className='grid grid-cols-3 gap-2 w-[300px] '>
        <NumberButton number={"7"}/>
        <NumberButton number={"8"}/>
        <NumberButton number={"9"}/>
        <NumberButton number={"4"}/>
        <NumberButton number={"5"}/>
        <NumberButton number={"6"}/>
        <NumberButton number={"1"}/>
        <NumberButton number={"2"}/>
        <NumberButton number={"3"}/>
    </div>
  )
}
