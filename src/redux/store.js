import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../redux/slices/counterAddTodo";

export default configureStore({
  reducer: {
    counter: todosReducer,
  }
});

