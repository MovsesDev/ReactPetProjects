import { Todos } from "./../interfaces";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

interface MyObject {
  id: string;
  title: string;
}

const initialState: Todos = {
  todos: [],
};

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo(state, action: PayloadAction<MyObject>) {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
      });
    },
  }, extraReducers(builder) {
      builder.addCase(getTodos.pending, (state, action) => {
          console.log('loading');
          
      }).addCase(getTodos.fulfilled, (state, action) => {
          console.log('success');
          
      }).addCase(getTodos.rejected, (state, action) => {
        console.log('rejected');
        
    })
  }

});

export const { addTodo, deleteTodo, editTodo } = todoReducer.actions;
export default todoReducer.reducer;
