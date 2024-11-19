import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    todos: [
        {id: uuidv4(), name: 'wake up'},
        {id: uuidv4(), name: 'breakfast'},
        {id: uuidv4(), name: 'play tennis'}
    ],
    toggleForm: true,
    todoUpdate: {}
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        todoAdded: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        todosCleared: (state) => {
            state.todos = []
        },
        todoDeleted: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleInputForm: (state, action) => {
            state.toggleForm = !state.toggleForm;
            state.todoUpdate = {...state.todoUpdate, ...action.payload};
        },
        todoUpdated: (state, action) => {
            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id)
            todoToUpdate.name = action.payload.name
            state.toggleForm = !state.toggleForm
        }
    }
})
export const { todoAdded, todosCleared, todoDeleted, toggleInputForm, todoUpdated } = todoSlice.actions
export default todoSlice.reducer;