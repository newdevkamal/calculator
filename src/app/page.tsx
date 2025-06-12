import { getTodo } from "@/features/displayTodo/api/client";
import { TodoCards } from "@/features/displayTodo/components/TodoCards";
import { GroupedTodos, TodoListByDate } from "@/utils/types";

export default async function Home() {
  const data:TodoListByDate=await getTodo()
  console.log(data)
  return (
    <>
      <TodoCards data={data}/>
    </>
  );
}
