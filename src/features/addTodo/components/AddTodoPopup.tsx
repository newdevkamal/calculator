import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from 'lucide-react';
import addTodoPopupStore from '../store/addTodoPopupStore';
import { Button } from '@/components/ui/button';
import { todosStore } from '@/store/todosStore';

function AddTodoPopup() {
    const inputRef = useRef<HTMLInputElement>(null);
    const inputTodoRef = useRef<HTMLInputElement>(null);

     useEffect(() => {
        inputTodoRef.current?.focus();
    }, []);

    const [isSaving,setIsSaving] = useState(false);
    
    const setIsTodoAdding = addTodoPopupStore((state) => state.setIsTodoAdding)
    const selectedTodoDate = addTodoPopupStore((state) => state.selectedDate)
    const addNewTodoTostore= todosStore((state)=>state.addNewTodoToStore)

    const [todoText, setTodoText] = useState("");
    const [todoDate, setTodoDate]= useState(selectedTodoDate)
    
    const handleSaveTodo=async(e:React.FormEvent<HTMLFormElement>)=>{
        setIsSaving(true);
        
        e.preventDefault()
        const formData=new FormData(e.currentTarget)
        const {name, date} = Object.fromEntries(formData.entries());
        
        if (
            !name ||
            !date ||
            typeof name !== "string" ||
            name.trim().length < 3
        ) {
            setIsSaving(false);
            return;
        }
        
        const res= await fetch("/api/addTodo",
            {
                method:"POST",
                headers:{ 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, date})
            }
        )
        if(res.ok){

            setTodoText("");       
            setIsTodoAdding(false)
            const {newData}=await res.json()
            addNewTodoTostore(newData)

            
        }else{
            setIsSaving(false);
            console.log("todo is not saved")
        }
        

            }   

    const closePopup=()=>{
        setIsTodoAdding(false)
    }



  return (
    <form onSubmit={handleSaveTodo}>
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-10">       
            <div className="bg-white p-6 rounded-3xl shadow-lg lg:w-1/3 ">
                <h2 className="text-xl font-bold mb-4">Add New Todo</h2>
                <div className="mb-4">
                    <div className="mb-2">Todo Date</div>
                    <div className="relative cursor-pointer"
                        onClick={() => inputRef.current?.showPicker ? inputRef.current.showPicker() : inputRef.current?.focus()}>
                    <input
                        ref={inputRef}
                        type="date"
                        name="date"
                        value={todoDate}
                        onChange={(e)=>{setTodoDate(e.target.value)}}
                        className="border px-4 py-1 w-full rounded-3xl cursor-pointer "
                        placeholder="Enter your todo date"                     
                    />
                    
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none cursor-pointer">
                        <Calendar className="text-black w-4" />
                    </div>
                    </div>
                    
                </div>
                <div className="mb-4">
                    <div className="mb-2">Todo name</div>
                    <input
                        type="text"
                        name="name"
                        ref={inputTodoRef}
                        className="border px-4 py-1 w-full rounded-3xl"
                        placeholder="Enter your todo name"
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        
                    />
                </div> 
                <div className="flex justify-end gap-2 mt-5">
                    <Button
                        variant={"outline"}
                        className="hover:bg-gray-300 px-4 py-2 rounded-3xl"
                        type='button'
                        onClick={closePopup}

                        
                        
                    >
                    Cancel
                    </Button>

                    {isSaving ? 
                        <Button 
                            className='bg-gray-400 !cursor-not-allowed text-white px-4 py-2 rounded-3xl font-semibold'
                            disabled>

                            <div className="w-5 h-5 border-3 border-gray-300 border-t-3 border-t-blue-500 rounded-full animate-spin mx-auto"></div>                              
                            Saving
                        </Button>:

                        <Button
                            className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-3xl `}  
                            type='submit'
                            disabled={todoText.length<3}
                        >
                        Save
                        </Button>
                    }
                </div>
            </div>
        </div>
    </form>
  )
}

export default AddTodoPopup