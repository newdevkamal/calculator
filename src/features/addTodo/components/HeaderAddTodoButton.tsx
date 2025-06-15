import { Button } from '@/components/ui/button'
import React from 'react'
import addTodoPopupStore from '../store/addTodoPopupStore'

export default function HeaderAddTodoButton() {
 const setIsTodoAdding = addTodoPopupStore((state) => state.setIsTodoAdding)

  const displayPopup=()=>{
    setIsTodoAdding(true)
  }
  return (
    <Button variant={"outline"}
            onClick={displayPopup}>
        + Add 
    </Button>
  )
}
