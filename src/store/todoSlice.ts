import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
    id: string,
    text: string,
    description?: string,
    status: string
}
type TodosState = {
    list: Todo[]
}

const initialState: TodosState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<{ text: string, description: string }>) {
            state.list.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                description: action.payload.description,
                status: 'inWork',
            });
        },
        toggleComplete(state, action: PayloadAction<{ id: string, value: string }>) {
            const { id, value } = action.payload;
            const toggledTodo = state.list.find(todo => todo.id === id);
            if (toggledTodo) toggledTodo.status = value;
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        }
    },
});

export const {addTodo, toggleComplete, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;