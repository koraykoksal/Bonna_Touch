import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import touchReducer from '../features/touchSlice'
import authReducer from "../features/authSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

//store created
export const store = configureStore({

  reducer: {
    auth: persistedReducer,
    touch: touchReducer,
  },
  //consolda çıkan serileştirme hatasını göstermiyor
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

})

export const persistor = persistStore(store)
