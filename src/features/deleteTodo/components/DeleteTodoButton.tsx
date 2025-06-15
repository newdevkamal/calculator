import { Button } from '@/components/ui/button'
import { todosStore } from '@/store/todosStore';
import { Trash } from 'lucide-react';
import React, { useState } from 'react'

export default function DeleteTodoButton({id}:{id:string}) {
       
    const [isLoading, setIsLoading] = useState(false)
    const deleteOneTodoStore=todosStore((state)=>state.deleteOneTodoStore)
    
     const handleDeleteClick = async() => {
        setIsLoading(true);
        const res= await fetch(`api/deleteTodo?id=${id}`,{
            method:"DELETE"
        })
        if(res.ok){
            setIsLoading(false)
            deleteOneTodoStore(id)
            //const {massage} = await res.json();
            
            
        }

    }

   
  return (
    <Button variant={"circle"}
        onClick={handleDeleteClick}
        size="icon"
        className=" bg-gray-300 relative flex items-center justify-center hover:bg-gray-400 focus:outline-none ">
    {isLoading &&
        <span className="absolute inset-0 rounded-full border-2 border-t-transparent border-[hsl(246,100%,55%)]  animate-spin outline-none"></span>}
        <Trash size={20} className="text-blue-800 hover:text-white" />
    </Button>
  )
}
