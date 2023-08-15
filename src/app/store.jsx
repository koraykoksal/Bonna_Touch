import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import touchReducer from '../features/touchSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, touchReducer)
 

//store created
export const store =configureStore({

    reducer:{
        touch:persistedReducer,
    },
    //consolda çıkan serileştirme hatasını göstermiyor
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

})

export const persistor = persistStore(store)
