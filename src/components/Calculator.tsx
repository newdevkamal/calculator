import React from 'react'
import DisplayEnteredValue from '@/features/displayEnteredValue/component/DisplayEnteredValue'
import ClearAllButton from '@/features/clearEnteredValue/components/ClearAllButton'
import ClearLastNumberButton from '@/features/clearEnteredValue/components/ClearLastNumberButton'
import ClearLastButton from '@/features/clearEnteredValue/components/ClearLastButton'
import DevideButton from '@/features/doArithmatics/components/DevideButton'
import NumberButton from './NumberButton'
import MultifyButton from '@/features/doArithmatics/components/MultifyButton'
import SubtractButton from '@/features/doArithmatics/components/SubtractButton'
import AddButton from '@/features/doArithmatics/components/AddButton'
import DecimalButton from '@/features/numberFormats/components/DecimalButton'
import NegativePositiveButton from '@/features/numberFormats/components/NegativePositiveButton'
import EqualButton from '@/features/doArithmatics/components/EqualButton'

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
            <DevideButton/>

            <NumberButton number={"7"}/>
            <NumberButton number={"8"}/>
            <NumberButton number={"9"}/>
            <MultifyButton/>

            <NumberButton number={"4"}/>
            <NumberButton number={"5"}/>
            <NumberButton number={"6"}/>
            <SubtractButton/>

            <NumberButton number={"1"}/>
            <NumberButton number={"2"}/>
            <NumberButton number={"3"}/>
            <AddButton/>

            <NegativePositiveButton/>
            <NumberButton number={"0"}/>
            <DecimalButton />
            <EqualButton/>

        </div>
      </div>  
    </>
  )
}
