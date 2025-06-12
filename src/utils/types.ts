export type todos={   
       _id: string;
        name: string;
        date: string;      
};
export type todosArray=todos[];

export type CatogorizedTodo = {
  id: string;
  todoName: string;
};

export type TodoListByDate = {
  [date: string]: CatogorizedTodo[];
};


export type GroupedTodos = {
        [date: string]: { todoName: string; id: string }[];
      };


