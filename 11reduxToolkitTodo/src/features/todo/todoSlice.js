import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}


export const todoSlice = createSlice({
    name: 'todo', // browser extension mai yahi name show hota hai
    initialState,
    reducers: {
        addTodo: (state, action) => { //State madye current state milta hai. & action madye jo bhi data pass karte hai wo milta hai
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => { 
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
})


export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer