"use client"
import AddTodoPopup from '@/features/addTodo/components/AddTodoPopup'
import addTodoPopupStore from '@/features/addTodo/store/addTodoPopupStore'
import { TodoCards } from '@/features/displayTodo/components/TodoCards'
import EditTodosPopup from '@/features/editTodo/components/EditTodoPopup'
import editTodoPopupStore from '@/features/editTodo/store/editTodoPopupStore'
import { todosStore } from '@/store/todosStore'
import categorizeByDate from '@/utils/categorizeByDate'
import { todos } from '@/utils/types'
import React, { useEffect } from 'react'


export default function Home({data}:{data:todos[]}) {

    const todos=todosStore((state)=>state.todos)
    const addTodosToStore=todosStore((state)=>state.addTodosToStore)

     useEffect(() => {
    // ✅ GOOD: State update inside useEffect
    addTodosToStore(data);
    }, []); // Only runs once

    const formatedTodos= categorizeByDate(todos)

    const isTodoAdding = addTodoPopupStore((state) => state.isTodoAdding)
    const isTodoEditing=editTodoPopupStore((state)=>state.isTodoEditing)
     
  return (
    <>   
      <TodoCards data={formatedTodos}/>
      
      {isTodoEditing &&
      <EditTodosPopup/>
      }
      
      {isTodoAdding &&(
          <AddTodoPopup/>)}
    </>
  )
}
