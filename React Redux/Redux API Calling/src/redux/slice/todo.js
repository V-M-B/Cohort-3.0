import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// action 
export const fetchTodos=createAsyncThunk('fetchTodos',async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})

const todoSlice=createSlice({
    name:'todo',
    initialState:{
        todos:[],
        isLoading:false,
        isError:false,
        data:null,

    },

    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.fulfilled,(state,actions)=>{
            state.isLoading=false;
            state.data=actions.payload;
        });

        builder.addCase(fetchTodos.pending,(state,actions)=>{
            state.isLoading=true;
            state.data=null;
        })

        builder.addCase(fetchTodos.rejected,(state,actions)=>{
            console.log('Error:', actions.error.message);
            
            state.isError=true;
            state.isLoading=false;
        })
    }
})
export default todoSlice.reducer;