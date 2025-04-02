import { getFromLocalStorage } from "@/utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    token : getFromLocalStorage("token") ? getFromLocalStorage("token") : null,
    user :   getFromLocalStorage("user") ? getFromLocalStorage("user") : null,
    loading : false
}

export const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,actions:PayloadAction<string>){
            state.token = actions.payload;
        },

        setUser(state, actions:PayloadAction<any>){
            state.user = actions.payload;
        },

        setLoading(state, actions:PayloadAction<boolean>){
            state.loading = actions.payload;
        }
    }
});

export const { setToken,setLoading,setUser} = authSlice.actions;

export default authSlice.reducer;