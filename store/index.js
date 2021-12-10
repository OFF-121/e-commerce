import { configureStore } from "@reduxjs/toolkit";
import CartSliserState from "./cartSlider";
import OfferState from "./offerSlideState";
import cartItemSlicer from "./cart";

export  const store=configureStore({
    reducer:{home:CartSliserState,storeSlider:OfferState,cart:cartItemSlicer}
})