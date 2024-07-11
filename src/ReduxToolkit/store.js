import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";
import wishlist  from "./slices/wishlistSlice";
import productModal from "./slices/productModal";

export const store = configureStore({
    reducer:{
        product:productSlice,
        cart:cartSlice,
        wishlist:wishlist,
        productView : productModal
    }
})