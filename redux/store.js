import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./usersSlice"

const store = configureStore({
    reducer: rootReducer
})

export default store;