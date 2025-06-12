"use client"

import { Pencil, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type TodosProps = {
  data: {todoName:string; id:string};
  date: string;

  
}

const TodoItem=({data,date}:TodosProps)=>{
    
    const [isLoading, setIsLoading] = useState(false)

   

    const handleEditClick = () => {
       
      };

    const handleDeleteClick = async() => {
        setIsLoading(true);
        console.log("delete clicked",data.id)
        const res= await fetch(`api/deleteTodo?id=${data.id}`,{
            method:"DELETE"
        })
        if(res.ok){
            const {massage} = await res.json();
            console.log(massage)
           
            
           
            setTimeout(() => {
               
            }, 4000);
        }

    }

    return(
        <>
            <div className="flex justify-between items-center p-2 
             bg-[#E4FAFF] text-[#0509FF] font-bold rounded-3xl "key={data.id}>
                <div className="pl-2">
                    <h1>{data.todoName}</h1>
                </div>
                <div className="flex gap-3">
                    <Button variant={"destructive"}
                            onClick={handleDeleteClick}
                            size="icon"
                            className="rounded-full w-8 h-8 bg-gray-300 relative flex items-center justify-center hover:bg-gray-400 focus:outline-none ">
                        {isLoading &&
                            <span className="absolute inset-0 rounded-full border-2 border-t-transparent border-[hsl(246,100%,55%)]  animate-spin outline-none"></span>}
                        <Trash size={20} className="text-blue-800 hover:text-white" />
                    </Button>
                    
                    <Button variant={"destructive"}
                            key={data.id}
                            onClick={handleEditClick}
                            size="icon"
                            className="rounded-full w-8 h-8 bg-blue-300 relative flex items-center justify-center hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <Pencil size={20} className="text-white hover:text-white" />
                    </Button>
                </div>
                   
            </div>
        
        
        </>
    )
}
export default TodoItem;