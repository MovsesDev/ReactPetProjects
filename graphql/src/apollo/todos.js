import { gql } from "@apollo/client";

export const ALL_TODOS = gql`
query AllTodos {
 todos: allTodos {
    id
    title
    completed
  }
}
  `

export const ADD_TODOS = gql`
mutation AddTodo($title:String!, $userId:ID!, $completed: Boolean!) {
  newTodo : createTodo(title: $title, user_id:$userId, completed: $completed){
    id,
    title,
    completed
  }
}
  `

export const DELETE_TODO =  gql`
mutation DeleteTodo($id:ID!) {
  removeTodo(id: $id) {
  id}
}`