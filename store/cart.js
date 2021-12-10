import { createSlice } from "@reduxjs/toolkit";

const initial={
    items:[],
    totalQuantity:0
}

const cartItemSlicer=createSlice({
    name:'cart',
    initialState:initial,
    reducers:{
        addItemToCart(state,action){
            state.totalQuantity++;
            const newItem=action.payload;
            const existingItem=state.items.find((item)=>item.itemId === newItem.id);
            
            console.log(newItem)

            if(existingItem)
            {
                existingItem.quantity++;
                
                existingItem.totalprice = parseInt(existingItem.totalprice) + parseInt(newItem.price);
            }
            
            else{
                state.items.push({
                    name:newItem.name,
                    itemId:newItem.id,
                    img:newItem.img,
                    about:newItem.about,
                    quantity:1,
                    totalprice:newItem.totalprice,
                    price:newItem.price
                })
            }
        },
        removeItemToCart(state,action){
            const removeItem=action.payload;
            const existingItem=state.items.find(item=>item.itemId===removeItem.id);
            console.log(removeItem,existingItem);
            state.totalQuantity--;
            if(existingItem.quantity===1)
            {
                state.items=state.items.filter((item)=>item.itemId !== removeItem.id)
                console.log("quantity 1");
            }
            else{
                existingItem.quantity--;
                existingItem.totalprice=existingItem.totalprice-removeItem.price;
            }
        }
    }
})

export const cartActions=cartItemSlicer.actions;

export default cartItemSlicer.reducer;