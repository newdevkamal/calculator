import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import addTodoPopupStore from '../store/addTodoPopupStore'
import { getDateLabel } from '@/utils/formatDate'

export default function CardAddTodoButton({cardId}:{cardId:string}) {

 const setIsTodoAdding= addTodoPopupStore((state)=>state.setIsTodoAdding)
 const setSelectedTodoDate= addTodoPopupStore((state)=>state.setSelectedDate)


 const handleAddTodoButton=()=>{
  setIsTodoAdding(true)
  setSelectedTodoDate(getDateLabel.inDate(cardId))
 }
  return (
    <Button variant={"circle"}
                       size={"icon"}
            onClick={handleAddTodoButton}
                       
                        >
        <PlusIcon className='font-bold'/>
    </Button>
  )
}
