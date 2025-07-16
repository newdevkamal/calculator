import React from 'react'
import DisplayEnteredValue from '@/features/displayEnteredValue/component/DisplayEnteredValue'
import ClearAllButton from '@/features/clearEnteredValue/components/ClearAllButton'
import ClearLastNumberButton from '@/features/clearEnteredValue/components/ClearLastNumberButton'
import ClearLastButton from '@/features/clearEnteredValue/components/ClearLastButton'

import NumberButton from './NumberButton'

import DecimalButton from '@/features/numberFormats/components/DecimalButton'
import NegativePositiveButton from '@/features/numberFormats/components/NegativePositiveButton'
import EqualButton from '@/features/doArithmatics/components/EqualButton'
import ArithmaticButton from '@/features/doArithmatics/components/ArithmaticButton'

export default function Calculator() {
  return (
    <>
      <div className='flex flex-col gap-4'>

        <div>
            <DisplayEnteredValue/>
        </div>

        <div className='grid grid-cols-4 gap-3 w-[400px] '>
            <ClearAllButton/>
            <ClearLastNumberButton/>
            <ClearLastButton/>
            <ArithmaticButton operation={"/"}/>

            <NumberButton number={"7"}/>
            <NumberButton number={"8"}/>
            <NumberButton number={"9"}/>
            <ArithmaticButton operation={"*"}/>

            <NumberButton number={"4"}/>
            <NumberButton number={"5"}/>
            <NumberButton number={"6"}/>
            <ArithmaticButton operation={"-"}/>

            <NumberButton number={"1"}/>
            <NumberButton number={"2"}/>
            <NumberButton number={"3"}/>
            <ArithmaticButton operation={"+"}/>

            <NegativePositiveButton/>
            <NumberButton number={"0"}/>
            <DecimalButton />
            <EqualButton/>

        </div>
      </div>  
    </>
  )
}
