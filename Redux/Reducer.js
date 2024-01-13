import { createReducer } from '@reduxjs/toolkit';
import { setUser } from './Action';

const initState={
    user:{},
}
export const Reducer=createReducer(initState, {
    [setUser]:(state, action)=>{
        state.user=action.payload
    },
    
})