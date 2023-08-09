import { configureStore } from "@reduxjs/toolkit";
import bonnaTouch from '../features/touchSlice'

//store created
export const store =configureStore({

    reducer:{
        touch:bonnaTouch,
    }

})

