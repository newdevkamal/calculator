import { todos } from '@/utils/types';
import { create } from 'zustand'

interface EditTodoPopupState {
    isTodoEditing: boolean;
    editingDate:string;
    editingTodo:string;
    setIsTodoEditing: ( isTodoEditing: boolean) => void;
    setEditingTodo :({name,date}:todos)=>void;
}

const editTodoPopupStore = create<EditTodoPopupState>((set) => ({
    isTodoEditing: false,
    editingDate:"",
    editingTodo:"",
    setIsTodoEditing: (isTodoEditing) => set({ isTodoEditing: isTodoEditing}),
    setEditingTodo:({name,date})=>set({editingDate:date,editingTodo:name})
}))

export default editTodoPopupStore;