import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react';
import React from 'react'
import editTodoPopupStore from '@/features/editTodo/store/editTodoPopupStore';
import { todosStore } from '@/store/todosStore';
import { todos } from '@/utils/types';

export default function EditTodoButton({id}:{id:string}) {
    
  const setIsEditing=editTodoPopupStore((state)=>state.setIsTodoEditing)
  const setEditingTodo=editTodoPopupStore((state)=>state.setEditingTodo)
  const todos=todosStore((state)=>state.todos)
    
    const handleEditClick = () => {
      
      setIsEditing(true)
      
      const selectedTodo:todos| undefined =todos.find((todoObj)=>
        todoObj._id===id      
      )

      if (selectedTodo) {
         setEditingTodo(selectedTodo)    
      }
   
   
     

    };

  return (
    <Button variant={"circle"}       
            onClick={handleEditClick}
            size="icon"
            className=" bg-blue-300 relative flex items-center justify-center hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <Pencil size={20} className="text-white hover:text-white" />
    </Button>
  )
}
