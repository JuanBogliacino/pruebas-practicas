import { configureStore } from "@reduxjs/toolkit";

import taskSlice from "../reducers/task/taskSlice";

export default configureStore({
    reducer: {
        tasks: taskSlice
    }
})