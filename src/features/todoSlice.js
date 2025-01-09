import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        todo: action.payload.todo,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    markAsCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.todo = action.payload.newTodo;
      }
    },
  },
});

// action creators are created for each function in reducer
// extract these action creators from todoSlice.actions
export const { addTodo, deleteTodo, markAsCompleted, editTodo } =
  todoSlice.actions;

// when we create a slice using createSlice(), it also generates a reducer function

// todoSlice.reducer is a function that:

// Takes the current state and an action as arguments.
// Returns the new state based on the action.
//Exporting the reducer function so you can add it to Redux store.
export default todoSlice.reducer;
