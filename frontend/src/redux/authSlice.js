import { createSlice } from "@reduxjs/toolkit";
import { Flag } from "lucide-react";

const authSlice = createSlice({
    name : "auth",
    initialState:{
        loading:false
    },
    reducers:{
        setLoading:(state , action)=>{
            state.loading=action.payload;
        }
    }
})

export const {setLoading} =authSlice.actions;
export default authSlice.reducer;