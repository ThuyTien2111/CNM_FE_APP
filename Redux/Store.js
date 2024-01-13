import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from './Reducer';

const Store=configureStore({
    reducer:{
        zalochat:Reducer
    }
})
export default Store;