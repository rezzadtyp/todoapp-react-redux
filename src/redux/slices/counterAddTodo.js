import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { title: "masak", isDone: true },
    { title: "ngoding", isDone: false },
    { title: "tidur", isDone: true },
  ],
  newTodo: "",
};

const counterAddTodo = createSlice({
  name: "counter",
  initialState,

  reducers: {
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    todoIsDone: (state, action) => {
      const e = action.payload;
      state.todos[e].isDone = !state.todos[e].isDone;
    },
    addTodo: (state, action) => {
      const newTodo = { title: action.payload, isDone: false };
      state.todos.push(newTodo);
    },
  },
});

export const { deleteTodo, todoIsDone, addTodo } = counterAddTodo.actions;
export default counterAddTodo.reducer;
