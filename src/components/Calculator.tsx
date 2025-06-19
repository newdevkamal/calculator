import React from 'react'
import NumberGrid from './NumberGrid'
import BottomButtons from './BottomButtons'
import DisplayEnteredValue from '@/features/displayEnteredValue/component/DisplayEnteredValue'

export default function Calculator() {
  return (
    <div className='flex flex-col gap-2'>
        <DisplayEnteredValue/>
         <NumberGrid/>
         <BottomButtons/>
    </div>
  )
}
