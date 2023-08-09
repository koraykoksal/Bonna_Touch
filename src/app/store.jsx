import { configureStore } from "@reduxjs/toolkit";
import touchReducer from '../features/touchSlice'

//store created
export const store =configureStore({

    reducer:{
        touch:touchReducer,
    }

})

