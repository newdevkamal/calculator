import CardAddTodoButton from '@/features/addTodo/components/CardAddTodoButton';
import TodoItem from '@/features/displayTodo/components/TodoItem'


type TodosProps = {
    data: {todoName:string; id:string}[];
    date: string;
}

const TodoCard = ({data,date}:TodosProps) => {

    return (
        <div className="p-6 sm:p-15 flex flex-col  rounded-2xl sm:w-[80%] w-full gap-3  bg-[#9affbc]">
            <div>
                <h1 className='text-2xl font-semibold pl-1' >{date}</h1>
            </div>
            <div className='pl-4 flex flex-col gap-2'>
                {data.map((todoData, index) => (
                    <TodoItem data={todoData}
                             date={date}
                            key={index}
                             />
                ))}
            </div>
            <div className='flex flex-col justify-between items-center mt-6 '>
                <CardAddTodoButton cardId={date}/>
             </div>
        
        </div>
    );
}

export default TodoCard;