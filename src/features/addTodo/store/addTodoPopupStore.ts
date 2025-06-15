import { create } from 'zustand'

interface AddTodoPopupState {
    isTodoAdding: boolean;
    selectedDate:string;
    setIsTodoAdding: (isAdding: boolean) => void;
    setSelectedDate:(selectedTodoDate:string)=>void
}

const addTodoPopupStore = create<AddTodoPopupState>((set) => ({
    isTodoAdding: false,
    selectedDate:"",
    setIsTodoAdding: (isAdding: boolean) => set({ isTodoAdding: isAdding }),
    setSelectedDate:(selectedTodoDate:string)=>set({selectedDate:selectedTodoDate})
}))

export default addTodoPopupStore;