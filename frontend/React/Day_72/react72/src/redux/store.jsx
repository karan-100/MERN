import {configureStore} from "@reduxjs/toolkit"
import counterSlice  from "../fratures/counter/counterSlice"
export const store=configureStore({
    reducer:{
        counter: counterSlice
    },
})