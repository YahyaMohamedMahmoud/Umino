import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("productSlice/fetchProduct" , 

    async ()=> {
     let Api = await fetch("shop.json");
     let finalApi = await Api.json();
    return finalApi    
    }
)
const initialState = {
    women: [],
    men: [],
    sneakers:[],
    watches: [],
};

export const productSlice = createSlice({
   initialState,
   name:"productSlice",
   extraReducers:(builder)=>{
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
    builder.addCase(fetchProduct.fulfilled , (state , action)=>{
        state.women = action.payload.women;
        state.men = action.payload.men;
        state.sneakers = action.payload.sneakers;
        state.watches = action.payload.watches;
    })
   } ,
})
export default productSlice.reducer;