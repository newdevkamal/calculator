import { Calendar } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import editTodoPopupStore from "../store/editTodoPopupStore";



type EditTodosPopupProps = {
    id: string;
    todo: string 
    date: string
    onClose: () => void;
}


const EditTodosPopup=()=>{
    const inputRef = useRef<HTMLInputElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const setIsTodoEditing=editTodoPopupStore((state)=>state.setIsTodoEditing)
    const editingTodo=editTodoPopupStore((state)=>state.editingTodo)
    const editingDate=editTodoPopupStore((state)=>state.editingDate)
    


    const [todoDate,setTodoDate]=useState(editingDate);
    const [todoText,setTodoText]=useState(editingTodo);
    
    const handleUpdateClick = async (e: React.FormEvent<HTMLFormElement>) => {
        
        setIsEditing(true);
        e.preventDefault();
       /*  if (
            !todoText ||
            !todoDate ||
            typeof todoText !== "string" ||
            todoText.trim().length < 3
            ) {
                setIsEditing(false);
                return;

            } */
        const res = await fetch(`/api/editTodo?id=${"g"}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: todoText, date: todoDate }),
        });

        
        if (res.ok) {
            const { updatedTodo } = await res.json();
            
        } else {
            console.error("Failed to update todo");
            setIsEditing(false);
        }
    };

    const handleCancelAddtodPopup=()=>{
       setIsTodoEditing(false)
    }
    
    
    

  
    

    return(
     <form onSubmit={handleUpdateClick}>
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-6 rounded-3xl shadow-lg lg:w-1/3">
                <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
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
                        onChange={(e)=>{setTodoText(e.target.value)}}
                        className="border px-4 py-1 w-full rounded-3xl"
                        placeholder="Enter your todo name"
                        value={todoText}
                   
                    
                    />
                </div> 
                <div className="flex justify-end gap-2 mt-8">
                    <button
                    className="bg-gray-300 px-4 py-2 rounded-3xl cursor-pointer"
                    onClick={handleCancelAddtodPopup}
                    type="button"            
                    >   
                        Cancel
                    </button>
                    
                    <Button
                        className={`bg-blue-500      text-white px-4 py-2 rounded-3xl 
                            cursor-pointer ${(todoText && todoDate)?"":"bg-gray-400 !cursor-not-allowed"}`}  
                        type="submit"
                        disabled={!todoText || !todoDate ||isEditing}
                        >   
                         {isEditing &&
                        <span className="loading loading-spinner w-5"></span>}
                         {isEditing ? "Updating" : "Update"}
                    </Button>

                </div>
            </div>
        </div>
     </form>   

)}

export default EditTodosPopup;