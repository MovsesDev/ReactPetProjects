import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../apollo/todos";


const TodoItem = ({ id, title, completed }) => {

  const [deleteTodo, { error }] = useMutation(DELETE_TODO, {
    update(cache, { data: { removeTodo } }) {
      cache.modify({
        fields: {
          allTodos(currentTodos) {
            return currentTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`)
          }
        }
      })
    }
  })

  return (
    <div>{title} <button onClick={ () => deleteTodo({variables:{id}})}>X</button></div>
  );
};

export default TodoItem;