import { ALL_TODOS } from "../apollo/todos";
import { useQuery } from "@apollo/client";
const TotalCount = () => {

const {data} = useQuery(ALL_TODOS)

    return (
        <b>Total todos:{data.todos.length}</b>
    )
  }
  
  export default TotalCount;