import { createSlice } from "@reduxjs/toolkit";


export const productModal =  createSlice({
    initialState :[],
    name:"productModal",
    reducers:{
        productView:(state , action)=>{
          return action.payload  
        },
        productDetails:(state , action)=>{
          return action.payload
        },


    }
})

export const {productView , productDetails} = productModal.actions;
export default productModal.reducer;