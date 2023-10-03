import {configureStore} from '@reduxjs/toolkit';
import HotelsSliceReducer from './HotelsSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    
    reducer:{
        Hotel : HotelsSliceReducer,
    }

});

export  default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;