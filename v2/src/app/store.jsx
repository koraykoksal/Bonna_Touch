import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import touchReducer from '../features/touchSlice'
import variationReducer from '../features/variationSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, touchReducer)
// const persisted2Reducer = persistReducer(persistConfig, variationReducer)

//store created
export const store =configureStore({

    reducer:{
        touch:persistedReducer,
        variation:variationReducer
    },
    //consolda çıkan serileştirme hatasını göstermiyor
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

})

export const persistor = persistStore(store)
