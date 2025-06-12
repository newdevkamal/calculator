
import { GroupedTodos } from '@/utils/types';
import React from 'react'
import TodoCard from './TodoCard';


export const TodoCards = ({data}:{data:GroupedTodos}) => {
  const todoDatesArray=Object.keys(data).sort()
  


  return (
    <div className=' flex flex-col justify-center items-center pt-5  gap-10 '>
        {todoDatesArray.map((date)=>{
          return (
            <TodoCard data={data[date]} date={date}/>
          )
        })}
    </div>
  )
}
