import {createSlice ,PayloadAction } from '@reduxjs/toolkit';
import Hotel from '../components/Hotel';

export interface Hotel {
    userId:number,
    id:number ,
    title:string,
    body:string,
    reversed:boolean,
}

interface HotelState {
    hotels : Hotel[];
}

const initialState : HotelState ={
    hotels : [],
}

type hotelstype= {id:number ,userId:number , title:string ,body: string , reversed:boolean}[]


export const HotelsSlice =createSlice({

    name:'hotels',
    initialState,
    reducers:{
        setGlobalHotels :(state,action : PayloadAction<hotelstype>)=>{
           state.hotels= [...action.payload];
        }
    }


});

export const {setGlobalHotels} =HotelsSlice.actions;

export default HotelsSlice.reducer;