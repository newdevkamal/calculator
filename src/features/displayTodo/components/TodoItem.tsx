"use client"

import DeleteTodoButton from "@/features/deleteTodo/components/DeleteTodoButton"
import EditTodoButton from "@/features/editTodo/components/EditTodoButton";


type TodosProps = {
  data: {todoName:string; id:string};
  date: string;

  
}

const TodoItem=({data}:TodosProps)=>{
 


   

    return(
        <>
            <div className="flex justify-between items-center p-2 
             bg-[#E4FAFF] text-[#0509FF] font-bold rounded-3xl ">
                <div className="pl-2">
                    <h1>{data.todoName}</h1>
                </div>
                <div className="flex gap-3">

                    <DeleteTodoButton id={data.id}/>                  
                    <EditTodoButton id={data.id}/>
                </div>
                   
            </div>
        
        
        </>
    )
}
export default TodoItem;