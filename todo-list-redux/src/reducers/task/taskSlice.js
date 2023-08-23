import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList: []
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        createTask: (state, action) => {
            state.tasksList = [...state.tasksList, action.payload]
        },
        deleteTask: (state, action) => {
            const id = action.payload
            state.tasksList = state.tasksList.filter(task => task.id !== id)
        },
        completeTask: (state, action) => {
            const id = action.payload
            state.tasksList = state.tasksList.map(task => task.id === id ? task = {...task, complete: !task.complete} : task)
        }
    }
})

export const { createTask, deleteTask, completeTask } = taskSlice.actions

export default taskSlice.reducer