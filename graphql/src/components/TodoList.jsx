import TodoItem from "./TodoItem";
import TotalCount from "./TotalCount";
import { useQuery } from "@apollo/client";
import { ALL_TODOS } from "../apollo/todos";
import AddTodo from "./AddTodo";
const TodoList = () => {
const {loading, error, data} = useQuery(ALL_TODOS)  

if (loading) return <h1>Loading</h1>
if(error) return <h1>Error</h1>


    return (
      <>
      <AddTodo/>
        {data.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
          />
        ))}
      <TotalCount />
      </>
    );
  };
  
  export default TodoList;