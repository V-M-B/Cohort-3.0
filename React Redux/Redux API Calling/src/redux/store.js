import { configureStore } from "@reduxjs/toolkit"; 
import todoReducer from './slice/todo';

export const store=configureStore(
    {
        reducer:{
            // add reducers here
            todo:todoReducer,
        }
    }
)

export default store;