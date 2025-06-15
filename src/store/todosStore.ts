import { todos, todosArray } from '@/utils/types'
import { create } from 'zustand'

interface todoStoreState{
    todos:todosArray |[],
    addTodosToStore:(todos:todos[])=>void
    addNewTodoToStore:(newTodo:todos)=>void
    deleteOneTodoStore:(id:string)=>void
}


export const todosStore=create<todoStoreState>((set)=>({
    todos:[],
    addTodosToStore:(todo)=>set({todos:todo}),
    addNewTodoToStore:(newTodo) => set((state) => ({
        todos: [...state.todos, newTodo]
    })),
    deleteOneTodoStore: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo._id !== id),
    })),
}))