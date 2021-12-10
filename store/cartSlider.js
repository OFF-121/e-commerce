import { createSlice } from "@reduxjs/toolkit";


const offerSlice=createSlice({
    name:'offerSlice',
    initialState:{count:0},
    reducers:{
        prev(state)
        {
            state.count=(state.count===0 ? 5 :state.count-1)
        },
        next(state)
        {
            state.count=(state.count===5 ? 0 : state.count+1)
        }
    }
})

export const offerCountAction=offerSlice.actions;

const CartSliserState=offerSlice.reducer;
export default CartSliserState;

