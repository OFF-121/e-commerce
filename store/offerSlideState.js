import { createSlice } from "@reduxjs/toolkit";


const offerSlice=createSlice({
    name:'offerSlice',
    initialState:{offerNo:0},
    reducers:{
        prev(state)
        {
            state.offerNo=(state.offerNo===0 ? 4 :state.offerNo-1)
        },
        next(state)
        {
            state.offerNo=(state.offerNo===4 ? 0 : state.offerNo+1)
        }
    }
})

export const offerCartAction=offerSlice.actions;

const OfferState=offerSlice.reducer;
export default OfferState;

